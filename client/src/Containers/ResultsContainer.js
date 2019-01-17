import React, { Component }  from 'react';
import { Button } from 'reactstrap';
import Result from '../Components/Result.js';
import { connect } from 'react-redux';
import { fetchProjects } from '../Actions/index.js'

class ResultsContainer extends Component {
  saveProject = () => {
    const { history, project } = this.props;
    fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify({
        // build well-structured params hash that will match Rails' expectations (sentences/tones must be *_attributes in order to be whitelisted)
        project: {
          img: project.img,
          title: project.title,
          text: project.text,
          sentences_attributes: project.sentences.map(
            sentence => (
              {
                "text": sentence.text,
                tones_attributes: sentence.tones.map(
                  tone => (
                    {
                      tone_name: tone.tone_name,
                      score: tone.score
                    }
                  )
                )
              }
            )
          ),
          tones_attributes: project.tones
        }
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json()).then((data) =>  {this.props.project.id = data.project.id}).then((id) => history.push("/projects")).catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <Result project={this.props.project} saveProject={this.saveProject}/>
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

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
