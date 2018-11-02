import React, { Component } from 'react';
import {Switch, BrowserRouter as Router, Route
} from 'react-router-dom';
import TextForm from './Containers/TextForm.js'
import Home from './Components/Home.js'
import Projects from './Containers/Projects.js'
import Result from './Components/Result.js'
import { fetchProjects } from './Actions/index.js'
import { connect } from "react-redux";                                                                                                                  
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/projects' render={(props) => <Projects {...props} projects={this.props.projectList} />} />
          <Route path='/projects/:projectId/result' component={Result} />
          <Route exact path='/projects/new' component={TextForm}/>
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
