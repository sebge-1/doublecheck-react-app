import React, {Component} from 'react'
import Result from '../Components/Result.js'
import {connect} from 'react-redux'
import '../stylesheets/ModalButton.css'

class DetailsContainer extends Component {
  render() {
    return (
      <>
        <Result project={this.props.selectedProject}/>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const selectedProject = state.projects.find(project => project.id === +ownProps.match.params.id)
  if (selectedProject) {
    return { selectedProject }
  }
}

export default connect(mapStateToProps)(DetailsContainer)
