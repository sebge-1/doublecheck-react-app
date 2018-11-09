import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaCheckDouble } from 'react-icons/fa'
import {Button} from 'reactstrap'

const Home = () => (
  <div className="App">
    <header className="App-header">
      <h1>
        Welcome to DoubleCheck!</h1>
        <br/>
        <FaCheckDouble />
      <hr/>
      <h4>
        Are you sending the right message?
      </h4>
      <p>
        Paste your texts and tweets into DoubleCheck to find out.
      </p>
      <Link to="/projects/new">
        <Button>
          Get Started
        </Button>
      </Link>
    </header>
  </div>
)
export default Home;
