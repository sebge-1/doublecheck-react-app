import React, { Component }  from 'react';
import {Link} from 'react-router-dom';
import Emoji from './Emoji.js'
import { symbolMap } from '../emojis.js';
import { imageMapper } from '../imageMapper.js'
import { titleGenerator } from '../titleGenerator.js'

import { connect } from 'react-redux';

const Result = props => (
      <div>
        <p>Passage: {props.project.text}</p>
        <h4>Summary</h4>
        <ol>
          {props.project.tones.map(tone =>
            <li>
              <em>{tone.tone_name}</em>
              <Emoji symbol={symbolMap(tone)} label={tone.tone_name}/>
              <p> Score: {tone.score}</p>
            </li>)}
        </ol>
        <h4>Detailed Analysis</h4>
        <ul>
          {props.project.sentences.map(
            sentence =>
            <div>
              <li>
                <em>Sentence {sentence.sentence_id + 1}: {sentence.text}</em>
              </li>
              <ol>{sentence.tones.map(tone =>
                <li>
                  <em>{tone.tone_name}</em>
                  <Emoji symbol={symbolMap(tone)}/>
                  <p>Score: {tone.score}</p>
                </li>
              )}
            </ol>
            <ol>
              {/* {image} */}
            </ol>
          </div>
            )}
        </ul>
      </div>
)

export default Result;
