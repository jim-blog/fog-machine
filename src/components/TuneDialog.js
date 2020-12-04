import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import TuneIcon from "@material-ui/icons/Tune";
import InputSlider from 'components/InputSlider';
import axios from "axios";

const fs = require('fs-extra')
const os = require('os');

class TuneDialog extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {settings: this.props.settings, open: false};
        this.setState(this.state);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.NameRef = this.props.settings.name;
        this.ArduinoIpAddressRef = this.props.settings.arduinoIpAddress;
        this.T1Ref = this.props.settings.T1;
        this.NRef = this.props.settings.N;
        this.T2Ref = this.props.settings.T2;
        this.T3Ref = this.props.settings.T3;
    }

    handleClickOpen() {
        const win = nw.Window.get();
        win.resizeTo(520, 660);
        this.NameRef = this.props.settings.name;
        this.ArduinoIpAddressRef = this.props.settings.arduinoIpAddress;
        this.T1Ref = this.props.settings.T1;
        this.NRef = this.props.settings.N;
        this.T2Ref = this.props.settings.T2;
        this.T3Ref = this.props.settings.T3;
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    handleSave() {
        const prevState = this.state;
        prevState.settings.name = this.NameRef;
        prevState.settings.arduinoIpAddress = this.ArduinoIpAddressRef;
        prevState.settings.T1 = this.T1Ref;
        prevState.settings.N = this.NRef;
        prevState.settings.T2 = this.T2Ref;
        prevState.settings.T3 = this.T3Ref;
        prevState.open = false;
        //console.log(JSON.stringify(prevState))
        //console.log(os.homedir());
        const settings_path = os.homedir() + "\\AppData\\Local\\fog_settings.json"
        fs.writeJsonSync(settings_path, prevState.settings)
        this.setState(prevState);
        this.props.onChange(this.props.open); // => for onChange event in parent
        const data = `${this.T1Ref},${this.NRef},${this.T2Ref},${this.T3Ref}`
        this.requestArduinoApi('settings', data);
    }

    requestArduinoApi(service="", value="") {
        const { t } = this.props;
        console.log('requestArduinoApi', service, value);
        axios.get(String(value).length > 0 ? `//${this.state.settings.arduinoIpAddress}/${service}/${value}`
            : `//${this.state.settings.arduinoIpAddress}/${service}`,
            {timeout: 3000})
            .then((response) => {
                console.log(response);
                const prevState = this.state
                if (response.status === 200) {
                    let result = response.data.match(/(\d+)\|(\d+)\|(\d+)\|(\d+)\|(\d+)\|(\d+)/);
                    if (result && result.length === 7) {
                        prevState.settings.t1 = parseInt(result[1]);
                        prevState.settings.n = parseInt(result[2]);
                        prevState.settings.t2 = parseInt(result[3]);
                        prevState.settings.t3 = parseInt(result[4]);
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
                prevState.status = t("Network error: ") + error.message + " @" + this.state.settings.arduinoIpAddress;
                this.setState(prevState); // => render
            });
    }

    render() {
        const { t } = this.props;
        return (
            <div className="TuneDialog">
                <Button startIcon={<TuneIcon/>} color="secondary" aria-label="tune" onClick={this.handleClickOpen}>
                    Settings
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{t('Settings')}</DialogTitle>
                    <DialogContent>
                        <div>
                            <TextField autoFocus margin="dense" id="Name" label={t('Name')}
                                       type="text"
                                       defaultValue={this.NameRef}
                                       onChange={(e) => {
                                           this.NameRef = e.target.value
                                       }}
                            />
                        </div>
                        <div>
                            <TextField autoFocus margin="dense" id="ArduinoIpAddress" label={t('Arduino Prop IP Address')}
                                       type="text"
                                       defaultValue={this.ArduinoIpAddressRef}
                                       onChange={(e) => {
                                           this.ArduinoIpAddressRef = e.target.value
                                       }}
                            />
                        </div>
                        <p></p>
                        <InputSlider title={t("Fog program: T1 (minutes)")} step={1} min={1} max={60}
                                     value={this.T1Ref}
                                     onChange={(e) => {
                                         this.T1Ref = e.value
                                     }}
                        />
                        <InputSlider title={t("Fog program: N (times)")} step={1} min={1} max={10}
                                     value={this.NRef}
                                     onChange={(e) => {
                                         this.NRef = e.value
                                     }}
                        />
                        <InputSlider title={t("Fog program: T2 (seconds)")} step={1} min={1} max={60}
                                     value={this.T2Ref}
                                     onChange={(e) => {
                                         this.T2Ref = e.value
                                     }}
                        />
                        <InputSlider title={t("Fog program: T3 (seconds)")} step={1} min={1} max={60}
                                     value={this.T3Ref}
                                     ref={this.T3Ref}
                                     onChange={(e) => {
                                         this.T3Ref = e.value
                                     }}
                        />
                        <DialogContentText>
                            Fog program: spit fog every <em>T1</em> seconds, <em>N</em> times for <em>T2</em> seconds,
                            pausing <em>T3</em> seconds.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default TuneDialog;