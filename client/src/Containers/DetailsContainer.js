import React, {Component} from 'react'
import Result from '../Components/Result.js'
import {connect} from 'react-redux'
import { fetchProjects } from '../Actions/index.js'
import '../stylesheets/ModalButton.css'

class DetailsContainer extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <>
        {this.props.selectedProject && <Result project={this.props.selectedProject}/>}
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


const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)
