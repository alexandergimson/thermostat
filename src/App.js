import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    thermostat: 20,
    powersavingmode: true
  };

  changeTemp = amount => {
    this.state.powersavingmode === true
      ? this.setState({
          thermostat: Math.min(this.state.thermostat + amount, 25)
        })
      : this.setState({
          thermostat: Math.min(this.state.thermostat + amount, 32)
        });
  };

  reset = () => this.setState({ thermostat: 20 });

  powersavingmode = () => {
    this.state.powersavingmode === true
      ? this.setState({ powersavingmode: false })
      : this.setState({ powersavingmode: true });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">This is my thermostat</h1>
        <p>The temperature is at {this.state.thermostat}</p>
        <button class="previous" onClick={() => this.changeTemp(-2)}>
          &laquo; Down by 2
        </button>
        <button class="next" onClick={() => this.changeTemp(2)}>
          Up by 2 &raquo;
        </button>

        <button onClick={() => this.reset()}>Reset</button>
        <p>
          Power usage is
          {this.state.thermostat < 18
            ? " low usage"
            : this.state.thermostat < 25
              ? " mid usage"
              : " other usage"}
        </p>
        <p>
          Power saving mode is
          {this.state.powersavingmode === true ? " on" : " off"}
        </p>
        <button onClick={() => this.powersavingmode()}>
          Change power mode
        </button>
      </div>
    );
  }
}

export default App;
