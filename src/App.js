import React, {Component} from 'react';
import ArduinoButton from 'components/ArduinoButton';
import TuneDialog from 'components/TuneDialog';
import 'App.css';

const fs = require('fs-extra')

class App extends Component {
    state = {
        settings: {
            arduinoIpAddress: '192.168.1.201',
            T1: 10,
            N: 2,
            T2: 5,
            T3: 5
        }
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Fog Machine Control
                    </p>
                </header>
                <div className="App-panel">
                    <ArduinoButton state={this.state} onClick={() => alert(this.state.settings.arduinoIpAddress)}>
                        POWER ON
                    </ArduinoButton>
                </div>
                <div className="App-footer">
                    <TuneDialog title={""} state={this.state}
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
