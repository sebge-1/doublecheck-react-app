import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProject } from '../Actions/index.js';
import { toneAnalyzer } from '../tone.js';

class TextForm extends Component {

  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addProject, history } = this.props;
    addProject(this.state);
    toneAnalyzer(this.state.text)
    history.push('/result')
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

const mapDispatchToProps = dispatch => {
  return {
    addProject: (project) => dispatch(addProject(project))
  };
};


export default connect(null, mapDispatchToProps)(TextForm)
