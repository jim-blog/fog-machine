import React, {Component} from 'react';
import {withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = theme => ({
    root: {
        width: 400,
    },
    input: {
        width: 52,
    },
});

class InputSlider extends Component {

    constructor(props) {
        super(props);
        this.value = props.value;
        this.state = {value: props.value};
        this.setState(this.state);
    }

    handleSliderChange(event, newValue) {
        this.value = newValue;
        this.setState({value: newValue});
    };

    handleInputChange(event) {
        this.value = event.target.value === '' ? '' : Number(event.target.value);
        this.setState({value: event.target.value === '' ? '' : Number(event.target.value)});
    };

    handleBlur() {
        if (this.value < this.props.min) {
            this.value = this.props.min;
        } else if (this.value > this.props.max) {
            this.value = this.props.max;
        }
    };

    render() {
        this.props.onChange(this); // => for onChange event in parent
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography id="input-slider" gutterBottom>
                    {this.props.title}
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                        <Slider
                            value={typeof this.value === 'number' ? this.value : 0}
                            onChange={this.handleSliderChange.bind(this)}
                            aria-labelledby="input-slider"
                            step={this.props.step}
                            min={this.props.min}
                            max={this.props.max}
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            className={classes.input}
                            value={this.value}
                            margin="dense"
                            onChange={this.handleInputChange.bind(this)}
                            onBlur={this.handleBlur.bind(this)}
                            type="number"
                            inputProps={{
                                step: 1,
                                min: this.props.min,
                                max: this.props.max,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles) (InputSlider);