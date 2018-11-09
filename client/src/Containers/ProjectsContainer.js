import React, { Component } from 'react';
import ProjectCards from '../Components/ProjectCards.js'
import {CardDeck, Card, CardTitle, CardImg, CardBody, CardText, Button } from 'reactstrap';

export default class ProjectsContainer extends Component {
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
      this.setState({loadMessage: "Results"});
    }
  }

  render() {
    return (
      // ToDo: handle display of loadMessage
      <ProjectCards projects={this.props.projects}/>
    )
  }
}
