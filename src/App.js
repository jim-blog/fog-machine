import React, {Component} from 'react';
import ArduinoButton from 'components/ArduinoButton';
import TuneDialog from 'components/TuneDialog';
import Grid from "@material-ui/core/Grid";
import Led from 'components/Led';
import 'App.css';

const fs = require('fs-extra')
const os = require('os');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settings: {
                name: 'Fog Machine',
                arduinoIpAddress: '',
                T1: 10,
                N: 2,
                T2: 5,
                T3: 5
            },
            machine: {
                power: 1,
                fog: 0
            }
        };

        console.log(os.homedir());
        const settings_path = os.homedir() + "\\AppData\\Local\\fog_settings.json"

        if (fs.existsSync(settings_path)) {
            const settings = fs.readJsonSync(settings_path, { throws: false })
            if (settings) {
                console.log(settings)
                this.state.settings = settings;
            }
        }
    }

    handlePowerOffClicked(e) {
        console.log('handlePowerOffClicked');
        const prevState = this.state
        prevState.machine.power = 0;
        this.setState(prevState); // => render
    }

    handlePowerOnClicked(e) {
        console.log('handlePowerOnClicked');
        const prevState = this.state
        prevState.machine.power = 1;
        this.setState(prevState); // => render
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.settings.name}
                </header>
                <div className="App-panel">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <Led className="Led"
                                 alt="power"
                                 label="POWER"
                                 state={this.state.machine.power}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Led className="Led"
                                 alt="fog"
                                 label="FOG"
                                 state={this.state.machine.fog}
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
                                POWER ON
                            </ArduinoButton>
                        </Grid>
                        <Grid item xs={6}>
                            <ArduinoButton state={this.state}
                                           onClick={this.handlePowerOffClicked.bind(this)}>
                                POWER OFF
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
                                           onClick={() => alert(this.state.settings.arduinoIpAddress)}>
                                SPIT ON
                            </ArduinoButton>
                        </Grid>
                        <Grid item xs={6}>
                            <ArduinoButton state={this.state}
                                           onClick={() => alert(this.state.settings.arduinoIpAddress)}>
                                SPIT OFF
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
                            <TuneDialog
                                settings={this.state.settings}
                                onChange={(e) => {this.setState(this.state)}}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
