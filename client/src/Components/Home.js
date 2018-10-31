import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaCheckDouble } from 'react-icons/fa'

export default class Home extends Component {
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
            <Link to="/projects/new">
              <button>
                Get Started
              </button>
            </Link>
      </header>
    </div>
    )
  }
}
