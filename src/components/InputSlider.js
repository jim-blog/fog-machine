import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Timer from '@material-ui/icons/Timer';

const useStyles = makeStyles({
    root: {
        width: 400,
    },
    input: {
        width: 52,
    },
});

function InputSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(10);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < props.min) {
            setValue(props.min);
        } else if (value > props.max) {
            setValue(props.max);
        }
    };

    return (
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                {props.title}
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Timer />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        step={props.step}
                        min={props.min}
                        max={props.max}
                    />
                </Grid>
                <Grid item>
                    <Input
                        className={classes.input}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="number"
                        inputProps={{
                            step: props.step,
                            min: props.min,
                            max: props.max,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default InputSlider;