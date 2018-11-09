import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import {Form} from 'reactstrap'
import { addProject } from '../Actions/index.js';
import { toneAnalyzer } from '../tone.js';

// ToDo: TextForm needs to generate image and title when TextForm is submitted
import { imageMapper } from '../imageMapper.js'
import { titleGenerator } from '../titleGenerator.js'


class TextForm extends Component {
  constructor() {
    super();

    this.state = {
        text: "",
        sentences: [],
        tones: []
      }
    }

  updateProject(result) {
    this.setState(
      Object.assign({}, {text: this.state.text}, {
        tones: result.document_tone.tones,
        sentences: result.sentences_tone
      })
    );
    return new Promise(
      (resolve,reject) => {
      resolve(this.state)
    })
  }

  async redirect(project) {
    // wait until project is updated and added to Redux store before redirecting
    let action = await toneAnalyzer(project).then(result => this.updateProject(result)).then(project => this.props.addProject(project))
    this.props.history.push(`/projects/${action.project.idx}/result`)
    console.log(project)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addProject } = this.props;
    this.redirect(this.state)
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  render(){
    return (
      <Form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <textarea name="text" cols="40" rows="5"
          onChange={this.handleOnChange}
          placeholder="Paste text here">
        </textarea><br/>
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    projects: state.projects
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addProject: (project) => dispatch(addProject(project))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TextForm))
