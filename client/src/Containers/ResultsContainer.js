import React, { Component }  from 'react';
import { Button } from 'reactstrap';
import Result from '../Components/Result.js';
import { connect } from 'react-redux';
import { fetchProjects } from '../Actions/index.js'

class ResultsContainer extends Component {
  saveProject = () => {
      const { history, project } = this.props;
    fetch('/api/save', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(project), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json()).then((data) =>  {this.props.project.id = data.project.id}).then((id) => history.push("/projects")).catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <Result project={this.props.project} />
        <div className="text-center">
          <Button onClick={this.saveProject} style={{fontFamily: 'Vidaloka'}}>
            Save Project
          </Button>
        </div>
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

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
