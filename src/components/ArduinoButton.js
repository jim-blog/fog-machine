import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}))(Tooltip);

class ArduinoButton extends Component {
    render() {
        const {
            onClick,
            className = "",
            tooltip,
            children,
        } = this.props;

        return (
            <HtmlTooltip arrow title={tooltip}>
            <Button
                onClick={onClick}
                className={className}
                variant="contained"
                color="primary"
            >
                {children}
            </Button>
            </HtmlTooltip>
        );
    }
}

export default ArduinoButton;