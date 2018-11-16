import React, {Component} from 'react'
import { Button } from 'reactstrap';
import ShowModal from './ShowModal.js'
import { withRouter } from 'react-router'
import '../stylesheets/ModalButton.css'

class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.defaultState
    };
     this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    }, () => {
      if (this.state.modal) {
        this.props.history.push(`/projects/${this.props.project.id}`)
      } else {
        this.props.history.push('/projects')
      }
    }
  )}

  render() {
    return (
      <div>
        <Button className="showButton" onClick={this.toggle}>See Details</Button>
        <ShowModal project={this.props.project} modal={this.state.modal} toggle={this.toggle}/>
      </div>
    )
  }
}
export default withRouter(ModalButton);
