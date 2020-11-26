import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LedBlack from "images/led-circle-black.svg";
import LedYellow from "images/led-circle-yellow.svg";

class Led extends Component {
    render() {
        const {
            state,
            alt,
            label,
            className = ""
        } = this.props;

        return (
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Typography>
                        {label}
                    </Typography>
                </Grid>
                <Grid item>
                    <img
                        className={className}
                        alt={alt}
                        src={state === 1 ? LedYellow :LedBlack}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default Led;