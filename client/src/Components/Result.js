import React, { Component } from 'react';
import Emoji from './Emoji.js'
import { symbolMap } from '../emojis.js';
import { Card, CardImg, CardFooter, CardImgOverlay,  Popover, PopoverHeader, PopoverBody, Button } from 'reactstrap';
import {withRouter} from "react-router-dom";
import '../stylesheets/Result.css'

class Result extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      project: props.project
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }


  text_truncate = (str, length) => {
    if (str.length > length) {
      return str.substring(0, length) + "...";
    } else {
      return str;
    }
  };

  startOver = () => {
    this.props.history.push('/projects/new')
  }

  render() {
    const passage = this.text_truncate(this.props.project.text, 200)
    return(
      <div className="App-header">
        <h2 className='cardTitle'><em>{this.props.project.title}</em></h2>
          <Card body inverse className="card text-center">
            <CardImg className="cardImage" src={require("../images/" + this.props.project.img)} alt="Card image cap" />
            <CardImgOverlay>
            <div className="text">
              <h3>Your Passage</h3>
                <hr/>
              <h4>{passage}</h4>
            </div>
          </CardImgOverlay>
          <CardFooter>
           <div className="summary">
              <h3>Summary</h3>
                <hr/>
              <ul>
              {this.props.project.tones.map((tone, index) =>
                <li key={index}>
                  <em>{tone.tone_name} </em>
                  <Emoji symbol={symbolMap(tone)} />
                  <p> Score: {tone.score}</p>
                </li>)}
              </ul>
              {/* show dismiss button only for projects not yet saved in the db */}
              {!this.props.project.id && <img className="actions" src={require("../error.png")} onClick={this.startOver} style={{height: "7%", width: "7%"}} alt="close"/>}
              <Button className="analysisButton btn-sm" id="Popover1" onClick={this.toggle} >
                View Details
              </Button>
              <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
              {this.props.project.sentences.map((sentence, index) =>
                <div key={index}>
                  <PopoverHeader>{sentence.text}</PopoverHeader>
                    <PopoverBody>
                      <ul key={index}>{sentence.tones.map((tone, index) =>
                        <li key={index}>
                          <em>{tone.tone_name}</em>
                          <Emoji symbol={symbolMap(tone)} />
                          <p>Score: {tone.score}</p>
                        </li>
                        )}
                      </ul>
                    </PopoverBody>
                  </div>
                )}
                </Popover>
                {/* show save button only for projects not yet saved in the db */}
              {!this.props.project.id && <img className="actions" src={require("../download.png")} onClick={this.props.saveProject} style={{height: "7%", width: "7%"}} alt="save"/>}
            </div>
          </CardFooter>
        </Card>
      </div>
     )
   }
}

export default withRouter(Result)
