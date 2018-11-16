import React from 'react';
import Emoji from './Emoji.js'
import { symbolMap } from '../emojis.js';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const closeBtn = <button style={{visibility: "hidden"}}></button>;

const ShowModal = props => (
  <Modal isOpen={props.modal} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>Summary</ModalHeader>
    <ModalBody>
      <ul className='list'>
      {props.project.tones.map(tone =>
        <li className='list-item'>
          <em>{tone.tone_name} </em>
          <Emoji symbol={symbolMap(tone)} />
          <p> Score: {tone.score}</p>
        </li>)}
      </ul>
    </ModalBody>
    <ModalHeader close={closeBtn}>Detailed Analysis</ModalHeader>
    <ModalBody>
        {props.project.sentences.map((sentence,index) =>
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
)
export default ShowModal;
