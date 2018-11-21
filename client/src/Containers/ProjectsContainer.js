import React, {Component} from 'react'
import ProjectCards from '../Components/ProjectCards.js'
import {connect} from 'react-redux'
import { deleteData } from '../Actions/index.js'

class ProjectsContainer extends Component {
  render() {
    return(
      <ProjectCards delete={this.props.deleteData} projects={this.props.projects}/>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteData: id => dispatch(deleteData(id))
})

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)
