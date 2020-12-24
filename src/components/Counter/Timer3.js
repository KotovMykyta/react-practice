import React, { Component } from "react";

export default class Timer3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digit: 0,
      isDisabled: false,
    };
  }

  handleStart() {
    this.setState({
      isDisabled: true,
    });
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  handleStop() {
    this.setState({
      isDisabled: false,
    });
    clearInterval(this.timerId);
  }

  handleReset() {
    this.setState({
      digit: 0,
    });
  }

  tick() {
    //console.log('tick')
    this.setState((state) => ({
      digit: state.digit + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>{this.state.digit}</h1>{/*eslint-disable-next-line*/}
        <a
          className="waves-effect green btn black-text"
          disabled={this.state.isDisabled}
          onClick={() => {
            this.handleStart();
          }}
        >
          START
        </a>{/*eslint-disable-next-line*/}
        <a
          className="waves-effect red btn black-text"
          disabled={!this.state.isDisabled}
          onClick={() => {
            this.handleStop();
          }}
        >
          STOP
        </a>{/*eslint-disable-next-line*/}
        <a
          className="waves-effect yellow btn black-text"
          variant="warning"
          onClick={() => {
            this.handleReset();
          }}
        >
          Reset
        </a>
      </>
    );
  }
}
