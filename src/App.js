import React, {Component} from 'react';
import Button from '@material-ui/core/Button'
import TuneDialog from 'components/TuneDialog';
import 'App.css';

const fs = require('fs-extra')

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

class App extends Component {
    render() {
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
                <div className="App-footer">
                    <TuneDialog
                    />
                </div>
            </div>
        );
    }

    componentDidMount() {
        if (fs.existsSync('settings.json')) {
            //let content = fs.readFileSync('settings.json', "utf8");
            //alert(content);
            fs.readJson('settings.json', {throws: false})
                .then(obj => {
                    console.log(obj)
                })
                .catch(err => {
                    console.error(err)
                })
        } else {
            alert("no settings...");
        }
    }
}

export default App;
