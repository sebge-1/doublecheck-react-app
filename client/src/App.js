import React, { Component } from 'react';
import {Switch, BrowserRouter as Router, Route
} from 'react-router-dom';
import Home from './Components/Home.js'
import ProjectsContainer from './Containers/ProjectsContainer.js'
import ResultsContainer from './Containers/ResultsContainer.js'
import DetailsContainer from './Containers/DetailsContainer.js'
import { fetchProjects } from './Actions/index.js'
import { connect } from "react-redux";
import NavBar from './Components/NavBar.js'                                                                                                              
import './stylesheets/App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (

      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} buttonVisible={true} />}/>
            <Route exact path='/projects/new' render={(props) => (<div><Home {...props} buttonVisible={false}/></div>)}/>
            <Route exact path='/projects' render={(props) => <ProjectsContainer {...props} projects={this.props.projectList} />} />
            <Route path='/projects/:id' render={(props) => <DetailsContainer {...props} projects={this.props.projectList} /> }/>
            <Route path='/projects/:projectId/result' component={ResultsContainer} />
          </Switch>
        </div>
      </Router>

    );
  }
}

const mapStateToProps = state => {
  return { projectList: state.projects }
}

 const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
