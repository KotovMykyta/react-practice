import React, { Component } from "react";

export default class Timer1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digit: 0,
    };
  }
  componentDidMount() {
    //console.log('did mount')
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    //console.log('will unmount')
    clearInterval(this.timerId);
  }

  tick() {
    //console.log('tick')
    this.setState((state) => ({
      digit: state.digit + 1,
    }));
  }

  render() {
    //console.log('render')
    return (
      <>
        <h2>{this.state.digit}</h2>
      </>
    );
  }
}
