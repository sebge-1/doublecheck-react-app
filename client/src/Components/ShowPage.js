import React, {Component} from 'react'
import Result from './Result.js'
import {connect} from 'react-redux'

class ShowPage extends Component {
  render() {

    return (
      <Result project={this.props.selectedProject}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const selectedProject = state.projects.find(project => project.id === +ownProps.projectId)
  if (selectedProject) {
    return { selectedProject }
  }
}

export default connect(mapStateToProps)(ShowPage)
