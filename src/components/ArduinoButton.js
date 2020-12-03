import React, {Component} from 'react'
import Button from '@material-ui/core/Button';

class ArduinoButton extends Component {
    render() {
        const {
            onClick,
            className = "",
            children,
        } = this.props;

        return (
            <Button
                onClick={onClick}
                className={className}
                variant="contained"
                color="primary"
            >
                {children}
            </Button>
        );
    }
}

export default ArduinoButton;