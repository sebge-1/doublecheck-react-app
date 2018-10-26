import React, { Component } from 'react';
import {Switch, BrowserRouter as Router, Route
} from 'react-router-dom';
import TextForm from './Containers/TextForm.js'
import Home from './Components/Home.js'
import Projects from './Containers/Projects.js'
import Result from './Components/Result.js'                                                                                                                          
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/projects' component={Projects} />
          <Route path='/projects/:projectId/result' component={Result} />
          <Route exact path='/projects/new' component={TextForm}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
