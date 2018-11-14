import React, {Component} from 'react'
import Emoji from './Emoji.js'
import { symbolMap } from '../emojis.js';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../stylesheets/ModalButton.css'

export default class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.defaultState
    };
     this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <Button className="showButton" onClick={this.toggle}>See Details</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Summary</ModalHeader>
          <ModalBody>
            <ul className='list'>
            {this.props.project.tones.map(tone =>
              <li className='list-item'>
                <em>{tone.tone_name} </em>
                <Emoji symbol={symbolMap(tone)} />
                <p> Score: {tone.score}</p>
              </li>)}
            </ul>
          </ModalBody>
          <ModalHeader close="">Detailed Analysis</ModalHeader>
          <ModalBody>
              {this.props.project.sentences.map((sentence,index) =>
                <>
                <p>{index + 1 }. {sentence.text}</p>
                <ul className='list'>{sentence.tones.map(tone =>
                  <li className='list-item'>
                    <em>{tone.tone_name}</em>
                    <Emoji symbol={symbolMap(tone)} />
                    <p>Score: {tone.score}</p>
                  </li>
                  )}
                </ul>
              </>
            )}
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
