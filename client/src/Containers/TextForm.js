import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProject } from '../Actions/index.js';
import { toneAnalyzer } from '../tone.js';

class TextForm extends Component {

  constructor() {
    super();

    this.state = {
      text: '',
      result: ''
    };
  }

  updateProject(result) {
    this.setState({result: result});
    return new Promise(
      (resolve,reject) => {
      resolve(this.state)
    })
  }

  async redirect(project) {
    // wait until project is updated and added to Redux store before redirecting
    let action = await toneAnalyzer(project).then(result => this.updateProject(result)).then(project => this.props.addProject(project))
    console.log(action.project.result)
    this.props.history.push(`/projects/${action.project.idx}/result`)
    console.log(project)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addProject, history } = this.props;
    this.redirect(this.state)
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  render(){
    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <textarea name="text" cols="40" rows="5"
          onChange={this.handleOnChange}
          placeholder="Paste text here">
        </textarea>
        <input type="submit" value="Submit" />
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(TextForm)
