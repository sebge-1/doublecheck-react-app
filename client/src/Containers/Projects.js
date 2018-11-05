import React, { Component } from 'react';

export default class Projects extends Component {
  constructor() {
    super();

    this.state = {
      loadMessage: "...Loading"
    };
  }

  checkLoadState = () => {
    if (this.state.loadMessage === "...Loading") {
      if (this.props.projects.length === 0) {
        this.setState({loadMessage: "Nothing to show yet. Try creating and saving a project first"})
      } else {
      this.setState({loadMessage: "Something went wrong. Try to refresh the page"})
      }
    }
  }

  componentDidMount() {
    setTimeout(this.checkLoadState, 3000);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projects.length !== 0) {
      this.setState({loadMessage: "Results:"});
    }
  }

  render() {
    let projectsHTML = this.props.projects.map(project =>
      <li>
        <p>Passage: {project.document.text}</p>
        <h4>Summary</h4>
        <ol>
          {project.document.document_tones.map(tone =>
            <li>
              <em>{tone.tone_name}</em>
              <p> Score: {tone.score}</p>
            </li>)}
        </ol>

      <h4>Detailed Analysis</h4>
      <ul>
        {project.document.sentences.map(
          sentence =>
          <li>
            <em>Sentence {project.document.sentences.indexOf(sentence) + 1}: {sentence.text}</em>
            <ol>{sentence.sentence_tones.map(tone =>
              <li>
                <em>{tone.tone_name}</em>
                <p> Score: {tone.score}</p>
              </li>
            )}
          </ol>
        </li>
        )}
      </ul>
    </li>
    )
    return (
      <div>
        <h1>{this.state.loadMessage}</h1>
        <ol>
          {projectsHTML}
        </ol>
      </div>
    )
  }
}
