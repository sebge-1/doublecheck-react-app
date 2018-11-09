import React, { Component} from 'react';
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'

const SubmitButton = () => (
  <Link to="/projects/new">
    <Button>
      Get Started
    </Button>
  </Link>
)

export default SubmitButton
