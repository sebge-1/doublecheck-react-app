import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import {Form, FormGroup, Input, Button} from 'reactstrap'
import { addProject } from '../Actions/index.js';
import { toneAnalyzer } from '../tone.js';
import { imageMapper } from '../imageMapper.js'

class TextForm extends Component {
  constructor() {
    super();

    this.state = {
        title: "",
        text: "",
      }
    }

  updateProject(result) {
    let updatedProject = Object.assign({}, {text: this.state.text, title: this.state.title}, {
      title: this.state.title || this.props.defaultTitle,
      img: imageMapper(),
      tones: result.document_tone.tones,
      sentences: result.sentences_tone
    });
    return this.props.addProject(updatedProject)
  }

  async redirect(project) {
    // wait until project is updated and added to Redux store before redirecting
    let action = await toneAnalyzer(project).then(result => this.updateProject(result))
    this.props.history.push(`/projects/${action.project.idx}/result`)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addProject } = this.props;
    this.redirect(this.state)
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <FormGroup>
          <Input type="title" name="title" placeholder={this.props.defaultTitle} onChange={this.handleOnChange}/>
        </FormGroup>
        <FormGroup>
          <Input type="textarea" name="text" cols="40" rows="5"
            onChange={this.handleOnChange}
            placeholder="Paste text here">
          </Input><br/>
      </FormGroup>
          <Button type="submit" value="Submit">Submit</Button>
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
