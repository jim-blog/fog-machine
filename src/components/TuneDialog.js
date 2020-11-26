import React, {useRef} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import TuneIcon from "@material-ui/icons/Tune";
import InputSlider from 'components/InputSlider';

function TuneDialog(props) {
    const [open, setOpen] = React.useState(false);
    const NameRef = useRef();
    const ArduinoIpAddressRef = useRef();
    const T1Ref = useRef();
    const NRef = useRef();
    const T2Ref = useRef();
    const T3Ref = useRef();

    const {
        state
    } = props;

    const handleClickOpen = () => {
        const win = nw.Window.get();
        win.resizeTo(520, 640);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        state.settings.name = NameRef.current.value;
        state.settings.arduinoIpAddress = ArduinoIpAddressRef.current.value;
        state.settings.T1 = parseInt(T1Ref.current.value)
        state.settings.N = parseInt(NRef.current.value)
        state.settings.T2 = parseInt(T2Ref.current.value)
        state.settings.T3 = parseInt(T3Ref.current.value)
        setOpen(false);
    };

    return (
        <div className="TuneDialog">
            <Button startIcon={<TuneIcon />} color="secondary" aria-label="tune" onClick={handleClickOpen}>
                Settings
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Settings</DialogTitle>
                <DialogContent>
                    <div>
                        <TextField autoFocus margin="dense" id="Name" label="Name"
                                   type="text" inputRef={NameRef}
                                   defaultValue={state.settings.name}
                        />
                    </div>
                    <div>
                        <TextField autoFocus margin="dense" id="ArduinoIpAddress" label="Arduino Prop IP Address"
                                   type="text" inputRef={ArduinoIpAddressRef}
                                   defaultValue={state.settings.arduinoIpAddress}
                        />
                    </div>
                    <InputSlider title={"T1 (minutes)"} step={1} min={1} max={60} value={state.settings.T1}
                                 inputRef={T1Ref}
                    />
                    <InputSlider title={"N (times)"} step={1} min={1} max={10} value={state.settings.N}
                                 inputRef={NRef}
                    />
                    <InputSlider title={"T2 (seconds)"} step={1} min={1} max={60} value={state.settings.T2}
                                 inputRef={T2Ref}
                    />
                    <InputSlider title={"T3 (seconds)"} step={1} min={1} max={60} value={state.settings.T3}
                                 inputRef={T3Ref}
                    />
                    <DialogContentText>
                        Spit every T1 seconds, N times for T2 seconds, pausing T3 seconds.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default TuneDialog;