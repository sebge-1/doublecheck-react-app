import React, { Component } from 'react';
import Emoji from './Emoji.js'
import { symbolMap } from '../emojis.js';
import { Card, CardImg, CardText, CardFooter, CardImgOverlay, Button } from 'reactstrap';
import '../stylesheets/Result.css'

export default class Result extends Component {
  render() {
    return(
  <div className="App-header">
      <h2 className='cardTitle'><em>{this.props.project.title}</em></h2>
     <Card body inverse className="card text-center">
       <CardImg className="cardImage" src={require("../images/" + this.props.project.img)} alt="Card image cap" />
       <CardImgOverlay>
            <CardText className="text">
                <h3>Your Passage</h3>
                <hr/>
                <h4>{this.props.project.text}</h4>
                <Button className="analysisButton">
                  View Detailed Analysis
                </Button>
             </CardText>
         </CardImgOverlay>
         <CardFooter>
           <div className="summary">
             <h3>Summary</h3>
             <hr/>
             <ul>
             {this.props.project.tones.map(tone =>
               <li>
                 <em>{tone.tone_name} </em>
                 <Emoji symbol={symbolMap(tone)} />
                 <p> Score: {tone.score}</p>
               </li>)}
             </ul>
           </div>
           </CardFooter>
     </Card>
   </div>
 )
 }
}
