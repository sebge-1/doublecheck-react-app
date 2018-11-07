import React, { Component }  from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

class Result extends Component {
  saveProject = () => {
    const { history } = this.props;
    fetch('/api/save', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(this.props.project), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
        if(response.ok) {
          history.push("/projects")
        }
    // (res => res.json())
    // .then(response => console.log('Success:', JSON.stringify(response)))
    // .catch(error => console.error('Error:', error));
  })
  }

  render() {
    console.log(this.props.project)
    return(
    <div>
      <h1>Results</h1>
      <p>Passage: {this.props.project.text}</p>
      <h4>Summary</h4>
      <ol>
        {this.props.project.tones.map(tone =>
          <li>
            <em>{tone.tone_name}</em>
            <p> Score: {tone.score}</p>
          </li>)}
      </ol>
      <h4>Detailed Analysis</h4>
      <ul>
        {this.props.project.sentences.map(
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
      <button onClick={this.saveProject}>
        Save project
      </button>
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const project = state.projects.find(project => project.idx === +ownProps.match.params.projectId)

  if (project) {
    return { project }
  } else {
    return { project: {} }
  }
}

export default connect(mapStateToProps)(Result);
