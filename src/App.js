import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Route
} from 'react-router-dom';
import TextForm from './Containers/TextForm.js'
import { FaCheckDouble } from 'react-icons/fa'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Welcome to DoubleCheck!<br/>
            <FaCheckDouble />
          </h1>
          <hr/>
          <h4>
            Are you sending the right message?
          </h4>
          <p>
            Paste your texts and tweets into DoubleCheck to find out.
          </p>
          <Router>
            <div><Route path='/projects/new' component={TextForm}/>
              <Link to="/projects/new">
              <button>
                Get Started
              </button>
              </Link>
            </div>
          </Router>
      </header>
    </div>
    );
  }
}

export default App;
