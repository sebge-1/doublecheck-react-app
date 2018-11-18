import React, {Component} from 'react'
import ShowPage from '../Components/ShowPage.js'
import {connect} from 'react-redux'
import '../stylesheets/ModalButton.css'
import { fetchProjects } from '../Actions/index.js'

class DetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId : props.match.params.id
    };
  }

  // may be necessary to refetch project and store them in redux store:
  // componentDidMount() {
  //   console.log(this.props.projects)
  //   if (this.props.projects === 0) {
  //     this.props.fetchProjects();
  //   }
  // }

  render() {
    return (
        <>
        <div>{this.props.match.id}</div>
        <ShowPage projectId={this.state.projectId} projects={this.props.projects}/>
      </>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {projects: state.projects}
// }
//
//  const mapDispatchToProps = dispatch => ({
//   fetchProjects: () => dispatch(fetchProjects())
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)
export default DetailsContainer
