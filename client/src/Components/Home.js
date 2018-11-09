import React, { Component} from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import TextForm from '../Containers/TextForm.js'
import { FaCheckDouble } from 'react-icons/fa'
import {Button} from 'reactstrap'
import SubmitButton from './SubmitButton'

const Home = props => (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to DoubleCheck!
        </h1>
        <br/>
        <FaCheckDouble />
        <hr/>
        <h4>
          Are you sending the right message?
        </h4>
        <p>
          Paste your texts and tweets into DoubleCheck to find out.
        </p>
        {props.buttonVisible &&
          <SubmitButton/>
        }
        {!props.buttonVisible && <TextForm/>}
      </header>
    </div>
)
export default Home;
