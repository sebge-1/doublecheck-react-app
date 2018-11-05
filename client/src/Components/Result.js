import React from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

const Result = ({ project }) =>
  <div>
    <h1>Results</h1>
    <p>Passage: {project.text}</p>
    <h4>Summary</h4>
    <ol>
      {project.result.document_tone.tones.map(tone =>
        <li>
          <em>{tone.tone_name}</em>
          <p> Score: {tone.score}</p>
        </li>)}
    </ol>
    <h4>Detailed Analysis</h4>
    <ul>
      {project.result.sentences_tone.map(
        sentence =>
        <div>
          <li>
            <em>Sentence {sentence.sentence_id + 1}: {sentence.text}</em>
          </li>
          <ol>{sentence.tones.map(tone =>
            <li>
              <em>{tone.tone_name}</em>
              <p>Score: {tone.score}</p>
            </li>
          )}
        </ol>
      </div>
        )}
    </ul>
    <button>
      Save project
    </button>
  </div>

const mapStateToProps = (state, ownProps) => {
  const project = state.projects.find(project => project.idx === +ownProps.match.params.projectId)

  if (project) {
    return { project }
  } else {
    return { project: {} }
  }
}

export default connect(mapStateToProps)(Result);
