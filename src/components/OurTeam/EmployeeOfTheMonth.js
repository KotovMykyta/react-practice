import React, { Component } from "react";

export default class EmployeeOfTheMonth extends Component {
  state = {
    loading: true,
    person: null,
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          person: data.results[0],
          loading: false,
        })
      );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="progress">
          <div className="indeterminate blue"></div>
        </div>
      );
    }

    return (
      <div className="center">
        <h3>Employee Of The Month</h3>

        <h4>
          {this.state.person.name.first} {this.state.person.name.last}
        </h4>
        <img
          className="circle"
          src={this.state.person.picture.large}
          style={{ width: "200px", height: "200px" }}
          alt="person__logo"
        />
      </div>
    );
  }
}
