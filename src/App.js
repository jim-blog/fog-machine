import React, {Component} from 'react';
import Button from '@material-ui/core/Button'
import './App.css';

class PropButton extends Component {
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

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Fog Machine Control
                </p>
            </header>
            <div className="App-panel">
                <PropButton onClick={() => alert("clicked!")}>
                    POWER ON
                </PropButton>
            </div>
        </div>
    );
}

export default App;
