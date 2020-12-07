import React, {Component, createRef} from 'react';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArduinoButton from 'components/ArduinoButton';
import TuneDialog from 'components/TuneDialog';
import AlertDialog from 'components/AlertDialog';
import Grid from '@material-ui/core/Grid';
import Led from 'components/Led';
import 'App.css';
import axios from 'axios';
import { initWindowState } from 'lib/winstate.js'

const fs = require('fs-extra')
const os = require('os');

class App extends Component {
    constructor(props) {
        super(props);

        const { t } = this.props;

        this.props.i18n.changeLanguage('en');

        this.state = {
            settings: {
                name: t('Fog Machine'),
                arduinoIpAddress: '',
                T1: 10,
                N: 2,
                T2: 5,
                T3: 5,
                uilang: this.props.i18n.language
            },
            machine: {
                power: 1,
                fog: 0,
                sequence: 0
            },
            sd: 0,
            sequence: 0,
            status: ''
        };

        console.log('SETTINGS', this.state);

        this.alertRef = createRef()
        this.timer = null;
        this.fogProgramTimer = null;

        this.sequence = {
            N: 0,
            level: 0,
            timer: null
        }

        //console.log(os.homedir());
        const settings_path = os.homedir() + "\\AppData\\Local\\fog_settings.json"

        if (fs.existsSync(settings_path)) {
            const settings = fs.readJsonSync(settings_path, {throws: false})
            if (settings) {
                console.log('SET SETTINGS', settings);
                this.state.settings = settings;
            }
        }

        this.props.i18n.changeLanguage(this.state.settings.uilang);

        if (!this.state.settings.arduinoIpAddress) {
            this.state.status = t("Arduino IP address is missing");
        }

        //nw.Window.get().showDevTools(); // for debug
        initWindowState();
    }

    componentDidMount() {
        if (this.state.settings.arduinoIpAddress) {
            this.requestArduinoApi();
            console.log('CREATE TIMER');
            this.timer = setInterval(() => {
                    this.requestArduinoApi();
                },
                30 * 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleArduinoSequenceOffClicked(e) {
        console.log('handleArduinoSequenceOffClicked');
        this.requestArduinoApi('sequence', 0)
        console.log('RECREATE TIMER');
        clearInterval(this.timer);
        this.timer = setInterval(() => {
                this.requestArduinoApi();
            },
            30 * 1000);
    }

    handleArduinoSequenceOnClicked(e) {
        console.log('handleArduinoSequenceOnClicked');
        const { t } = this.props;
        if (this.fogProgramTimer) {
            this.alertRef.current.handleClickOpen(t("Not allowed"), t("Stop PC sequence to enable Arduino sequence."));
            return;
        }
        if (this.state.machine.sequence === 1) {
            this.alertRef.current.handleClickOpen(t("Not allowed"), t("Arduino sequence already running."));
            return;
        }
        this.requestArduinoApi('sequence', 1)
        console.log('RECREATE TIMER (FAST)');
        clearInterval(this.timer);
        this.timer = setInterval(() => {
                this.requestArduinoApi();
            },
            850);
    }

    handleFogOffClicked(e) {
        console.log('handleFogOffClicked');
        this.requestArduinoApi('fog', 0)
    }

    handleFogOnClicked(e) {
        console.log('handleFogOnClicked');
        this.requestArduinoApi('fog', 1)
    }

    handlePowerOffClicked(e) {
        console.log('handlePowerOffClicked');
        this.requestArduinoApi('power', 0)
    }

    handlePowerOnClicked(e) {
        console.log('handlePowerOnClicked');
        this.requestArduinoApi('power', 1)
    }

    handleSequenceOffClicked(e) {
        console.log('handleSequenceOffClicked');
        if (this.sequence.timer) {
            clearTimeout(this.sequence.timer);
            this.sequence.timer = null;
            this.sequence.N = 0;
            this.sequence.level = 0;
            this.requestArduinoApi('fog',  this.sequence.level)
            this.setState({sequence: 0})
            console.log('RECREATE TIMER');
            this.timer = setInterval(() => {
                    this.requestArduinoApi();
                },
                30 * 1000);
        }
        if (this.fogProgramTimer) {
            clearInterval(this.fogProgramTimer);
            this.fogProgramTimer = null;
        }
    }

    handleSequenceOnClicked(e) {
        console.log('handleSequenceOnClicked');
        const { t } = this.props;
        if (this.state.machine.sequence === 1) {
            this.alertRef.current.handleClickOpen(t("Not allowed"), t("Stop Arduino sequence to enable PC sequence."));
            return;
        }
        if (this.fogProgramTimer) {
            this.alertRef.current.handleClickOpen(t("Not allowed"), t("PC sequence already running."));
            return;
        }
        this.setState({sequence: 1})
        console.log('CREATE FOG PROGRAM TIMER');
        this.fogProgramTimer = setInterval(() => {
                if (this.sequence.N === 0) {
                    clearInterval(this.timer);
                    this.sequence.N = this.state.settings.N;
                    this.sequence.level = 0;
                    this.processSequence();
                }
            },
            this.state.settings.T1 * 1000);
        if (this.sequence.N === 0) {
            clearInterval(this.timer);
            this.sequence.N = this.state.settings.N;
            this.sequence.level = 0;
            this.processSequence();
        }
    }

    processSequence() {
        console.log('processSequence', this.sequence.N, this.sequence.level);
        if (this.sequence.level === 1) {
            this.sequence.N = this.sequence.N - 1;
        }
        if (this.sequence.N === 0) {
            this.sequence.level = 0;
            console.log('FOG', this.sequence.level);
            this.requestArduinoApi('fog',  this.sequence.level)
            console.log('STOP');
            this.timer = setInterval(() => {
                    this.requestArduinoApi();
                },
                30 * 1000);
        } else {
            if (this.sequence.level === 0) {
                this.sequence.level = 1;
                console.log('FOG', this.sequence.level);
                this.requestArduinoApi('fog',  this.sequence.level)
                this.sequence.timer = setTimeout(() => {
                        this.processSequence();
                    },
                    this.state.settings.T2 * 1000);
            } else {
                this.sequence.level = 0;
                console.log('FOG', this.sequence.level);
                this.requestArduinoApi('fog',  this.sequence.level)
                this.sequence.timer = setTimeout(() => {
                        this.processSequence();
                    },
                    this.state.settings.T3 * 1000);
            }
        }
    }

    requestArduinoApi(service="", value="") {
        const { t } = this.props;
        console.log('requestArduinoApi', service, value);
        axios.get(String(value).length > 0 ? `http://${this.state.settings.arduinoIpAddress}/${service}/${value}`
            : `http://${this.state.settings.arduinoIpAddress}/${service}`,
            {timeout: 3000})
            .then((response) => {
                console.log(response);
                const prevState = this.state
                if (response.status === 200) {
                    let result = response.data.match(/(\d+)\|(\d+)\|(\d+)\|(\d+)\|(\d+)\|(\d+)\|(\d+)\|(\d+)/);
                    if (result && result.length === 9) {
                        prevState.sd = parseInt(result[8]);
                        if (prevState.sd === 1) { // SD present
                            prevState.settings.T1 = parseInt(result[1]);
                            prevState.settings.N = parseInt(result[2]);
                            prevState.settings.T2 = parseInt(result[3]);
                            prevState.settings.T3 = parseInt(result[4]);
                        }
                        prevState.machine.power = parseInt(result[5]);
                        prevState.machine.fog = parseInt(result[6]);
                        prevState.machine.sequence = parseInt(result[7]);

                        prevState.status = "";
                    } else {
                        prevState.status = t("Error: unexpected answer @") + this.state.settings.arduinoIpAddress;
                    }
                } else {
                    prevState.status = t("Error: ") + response.status + response.statusText + " @" + this.state.settings.arduinoIpAddress;
                }
                this.setState(prevState); // => render
            }, (error) => {
                console.log(error);
                const prevState = this.state
                prevState.status = t("Network error") + ": " + error.message + " @" + this.state.settings.arduinoIpAddress;
                this.alertRef.current.handleClickOpen(t("Warning"), prevState.status);
                this.setState(prevState); // => render
            });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.settings.uilang !== this.props.i18n.language) {
            this.props.i18n.changeLanguage(nextState.settings.uilang);
            return false;
        }
        return true;
    }

    render() {
        const { t } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.settings.name}
                    <Box className={"App-status-box"}>
                        {this.state.status}
                    </Box>
                </header>
                <div className="App-panel">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={3}>
                            <Led className="Led"
                                 alt={t('Power Led')}
                                 label={t('Power')}
                                 state={this.state.machine.power}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Led className="Led"
                                 alt={t('Fog Led')}
                                 label={t('Fog')}
                                 state={this.state.machine.fog}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Led className="Led"
                                 alt={t('Arduino sequence Led')}
                                 label={t('Arduino sequence')}
                                 tooltip={t('Fog program running on Arduino')}
                                 state={this.state.machine.sequence}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Led className="Led"
                                 alt={t('Program Led')}
                                 label={t('PC sequence')}
                                 tooltip={t('Fog program running on PC')}
                                 state={this.state.sequence}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <p></p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                                <ArduinoButton state={this.state}
                                               onClick={this.handlePowerOnClicked.bind(this)}>
                                    {t('Power ON')}
                                </ArduinoButton>
                        </Grid>
                        <Grid item xs={6}>
                            <ArduinoButton state={this.state}
                                           onClick={this.handlePowerOffClicked.bind(this)}>
                                {t('Power OFF')}
                            </ArduinoButton>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <p></p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} padding={10} alignItems="center">
                        <Grid item xs={6}>
                            <ArduinoButton state={this.state}
                                           onClick={this.handleFogOnClicked.bind(this)}>
                                {t('Fog ON')}
                            </ArduinoButton>
                        </Grid>
                        <Grid item xs={6}>
                            <ArduinoButton state={this.state}
                                           onClick={this.handleFogOffClicked.bind(this)}>
                                {t('Fog OFF')}
                            </ArduinoButton>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <p></p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} padding={10} alignItems="center">
                        <Grid item xs={9}>
                            <ArduinoButton tooltip={
                                <React.Fragment>
                                    <Typography color="inherit">{t('Start Arduino fog sequence')}</Typography>
                                    <hr/>
                                    {t('The fog sequence is controlled by the Arduino onboard sketch')}
                                </React.Fragment>
                            }
                                           state={this.state}
                                           onClick={this.handleArduinoSequenceOnClicked.bind(this)}>
                                {t('Start arduino fog program')}
                            </ArduinoButton>
                        </Grid>
                        <Grid item xs={3}>
                            <ArduinoButton tooltip={
                                <React.Fragment>
                                    <Typography color="inherit">{t('Stop Arduino fog sequence')}</Typography>
                                </React.Fragment>
                            }
                                           state={this.state}
                                           onClick={this.handleArduinoSequenceOffClicked.bind(this)}>
                                {t('Stop')}
                            </ArduinoButton>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <p></p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} padding={10} alignItems="center">
                        <Grid item xs={9}>
                            <Button state={this.state}
                                    color="primary"
                                    onClick={this.handleSequenceOnClicked.bind(this)}>
                                {t('Start fog program on PC')}
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button state={this.state}
                                    color="primary"
                                    onClick={this.handleSequenceOffClicked.bind(this)}>
                                {t('Stop')}
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <p></p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} padding={10} alignItems="center">
                        <Grid item xs={6}>
                            <TuneDialog
                                t = {t}
                                settings={this.state.settings}
                                onChange={(e) => {
                                    const prevState = this.state;
                                    console.log('TUNE', prevState)
                                    if (this.state.settings.arduinoIpAddress) {
                                        prevState.status = "";
                                        this.requestArduinoApi();
                                        console.log('RECREATE TIMER');
                                        clearInterval(this.timer);
                                        this.timer = setInterval(() => {
                                                this.requestArduinoApi();
                                            },
                                            30 * 1000);
                                    } else {
                                        prevState.status = t("Arduino IP address is missing");
                                    }
                                    this.setState(prevState)
                                }}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <p></p>
                        </Grid>
                        <Grid item xs={4}>
                            <Led className="Led"
                                 alt={t('Arduino SD card Led')}
                                 label={t('Arduino SD card')}
                                 state={this.state.sd}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <AlertDialog
                                t = {t}
                                ref={this.alertRef}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                            </AlertDialog>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

const AppI18n = withTranslation()(App)

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default AppI18n;