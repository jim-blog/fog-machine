import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import LedGrey from "images/led-circle-grey.svg";
import LedYellow from "images/led-circle-yellow.svg";

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}))(Tooltip);

class Led extends Component {
    render() {
        const {
            state,
            alt,
            label,
            tooltip = "",
            className = ""
        } = this.props;

        if ('tooltip' in this.props) {
            return (
                <HtmlTooltip arrow title={tooltip}>
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
                                src={state >= 1 ? LedYellow : LedGrey}
                            />
                        </Grid>
                    </Grid>
                </HtmlTooltip>
            );
        } else {
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
                            src={state === 1 ? LedYellow : LedGrey}
                        />
                    </Grid>
                </Grid>
            );
        }
    }
}

export default Led;