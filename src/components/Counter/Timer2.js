import React, { Component } from "react";

export default class Timer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digit: 0,
      color: "blue",
    };
  }

  handleInc() {
    this.setState((state) => ({
      digit: state.digit + 1,
    }));
  }

  handleDec() {
    this.setState((state) => ({
      digit: state.digit - 1,
    }));
  }

  handleRes() {
    this.setState({
      digit: 0,
      color: "blue",
    });
  }

  handleColor() {
    this.setState({
      color:
        "#" +
        (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase(),
    });
  }

  render() {
    return (
      <>
        <h1 style={{ color: this.state.color }}>{this.state.digit}</h1>{/*eslint-disable-next-line*/}
        <a
          className="waves-effect green accent-4 btn"
          onClick={() => {
            this.handleInc();
          }}
        >
          +
        </a>{/*eslint-disable-next-line*/}
        <a
          className="waves-effect red accent-4 btn"
          onClick={() => {
            this.handleDec();
          }}
        >
          -
        </a>{/*eslint-disable-next-line*/}
        <a
          className="waves-effect lime accent-2 btn black-text"
          onClick={() => {
            this.handleRes();
          }}
        >
          Reset
        </a>{/*eslint-disable-next-line*/}
        <a
          className="waves-effect light-blue btn black-text"
          onClick={() => {
            this.handleColor();
          }}
        >
          Color
        </a>
      </>
    );
  }
}
