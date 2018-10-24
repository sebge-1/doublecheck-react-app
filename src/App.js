import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import NavBar from './Components/NavBar.js'
import { FaCheckDouble } from 'react-icons/fa'
import { Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
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
            <BrowserRouter>
              <Link to="/projects/new">
                <Button>
                  Get Started
                </Button>
              </Link>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
