import React, { Component } from 'react';

export default class Projects extends Component {
  constructor() {
    super();

    this.state = {
      loadMessage: "...Loading"
    };
  }

  checkLoadState = () => {
    if (this.state.loadMessage === "...Loading") {
      if (this.props.projects.length === 0) {
        this.setState({loadMessage: "Nothing to show yet. Try creating and saving a project first"})
      } else {
      this.setState({loadMessage: "Something went wrong. Try to refresh the page"})
      }
    }
  }

  componentDidMount() {
    setTimeout(this.checkLoadState, 3000);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projects.length !== 0) {
      this.setState({loadMessage: "Results:"});
    }
  }

  render() {

    return (
      <div>
        <h1>{this.state.loadMessage}</h1>
      </div>
    )
  }
}
