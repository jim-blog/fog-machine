import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class PropButton extends Component {
  render() {
    const {
      onClick,
      className="",
        children,
    } = this.props;

    return (
        <button
          onClick={onClick}
          className={className}
          type="button"
          >
          {children}
        </button>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PropButton onClick={() => alert("clicked!")}>
          POWER ON
        </PropButton>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
