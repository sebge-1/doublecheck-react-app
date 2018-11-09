import React, { Component }  from 'react';
import { Button } from 'reactstrap'
import Result from './Result.js'
import { connect } from 'react-redux';

class ResultsContainer extends Component {
  saveProject = () => {
    console.log(this.props.project)
    const { history } = this.props;
    fetch('/api/save', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(this.props.project), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
        if(response.ok) {
          history.push("/projects")
        }
    // (res => res.json())
    // .then(response => console.log('Success:', JSON.stringify(response)))
    // .catch(error => console.error('Error:', error));
    })
  }

  render() {
    return (
      <div>
        <Result project={this.props.project} />
        <Button onClick={this.saveProject}>
          Save project
        </Button>
      </div>
      )
    }
  }

const mapStateToProps = (state, ownProps) => {
  const project = state.projects.find(project => project.idx === +ownProps.match.params.projectId)

  if (project) {
    return { project }
  } else {
    return { project: {} }
  }
}

export default connect(mapStateToProps)(ResultsContainer);
