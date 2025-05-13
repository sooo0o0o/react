import React, { Component } from "react";

export default class StateComponent extends Component {
  //state 선언. 반드시 state 로 선언해야함
  state = { num1: 1, num2: 2 };

  render() {
    return (
      <div className="StateComponent">
        <h4>StateComponent</h4>
        <p>num1: {this.state.num1}</p>
        <button onClick={() => this.setState({ num1: this.state.num1 + 1 })}>
          +
        </button>

        <button onClick={() => this.setState({ num1: this.state.num1 - 1 })}>
          -
        </button>

        <p>num2: {this.state.num2}</p>
        <button onClick={() => this.setState({ num2: this.state.num2 + 1 })}>
          +
        </button>

        <button onClick={() => this.setState({ num2: this.state.num2 - 1 })}>
          -
        </button>
      </div>
    );
  }
}
