import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Fab from "@material-ui/core/Fab";
import TuneIcon from "@material-ui/icons/Tune";

import InputSlider from 'components/InputSlider';

function TuneDialog() {
    const [open, setOpen] = React.useState(false);
    const ArduinoIpAddressRef = useRef();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        //alert("Save settings to be done...");
        alert(ArduinoIpAddressRef.current.value)
        setOpen(false);
    };

    return (
        <div className="TuneDialog">
            <Fab color="secondary" aria-label="tune" onClick={handleClickOpen}>
                <TuneIcon/>
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Settings</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" id="ArduinoIpAddress" label="Arduino Prop IP Address"
                                   type="text" inputRef={ArduinoIpAddressRef}
                    />
                    <DialogContentText>
                        Spit every T1 seconds, N times for T2 seconds, pausing T3 seconds.
                    </DialogContentText>
                    <InputSlider title={"T1 (seconds)"} step={60} min={10} max={3600}
                    />
                    <InputSlider title={"N (times)"} step={1} min={1} max={10}
                    />
                    <InputSlider title={"T2 (seconds)"} step={1} min={1} max={60}
                    />
                    <InputSlider title={"T3 (seconds)"} step={1} min={1} max={60}
                    />
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