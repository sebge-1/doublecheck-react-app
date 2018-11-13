import React, { Component } from 'react';
import {Switch, BrowserRouter as Router, Route
} from 'react-router-dom';
import Home from './Components/Home.js'
import ProjectsContainer from './Containers/ProjectsContainer.js'
import ResultsContainer from './Containers/ResultsContainer.js'
import { fetchProjects } from './Actions/index.js'
import { connect } from "react-redux";                                                                                                                  
import './stylesheets/App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} buttonVisible={true} />}/>
          <Route exact path='/projects' render={(props) => <ProjectsContainer {...props} projects={this.props.projectList} />} />
          <Route path='/projects/:projectId/result' component={ResultsContainer} />
          <Route exact path='/projects/new' render={(props) => (<div><Home {...props} buttonVisible={false}/></div>)}/>
        </Switch>
      </Router>
    );
  }
}


// mapStateToProps is a shorthand to access one slice of the global state of the app (kept in the redux store) via props
const mapStateToProps = state => {
  return { projectList: state.projects }
}
// mapDispatchToProps is a shorthand that lets the app component dispatch an action via props
 const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
