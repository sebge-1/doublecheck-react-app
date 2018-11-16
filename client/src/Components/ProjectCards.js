import React from 'react';
import ModalButton from './ModalButton.js'
import {CardDeck, Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import {Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

const ProjectCards = (props) => (
  <>
    <CardDeck>
      {props.projects.map(project => (
        <Card>
          <CardImg top width="80%" src={require("../images/" + project.img)} alt="Card image cap" />
          <CardBody>
            <CardTitle className="text-center text-muted"><em>{project.title}</em></CardTitle>
            <CardText>{project.text}</CardText>
             <div className="text-center">
               <ModalButton defaultState={false} project={project}/>
            </div>
         </CardBody>
       </Card>
      )
     )}
   </CardDeck>
     <Route path={"projects/:id"} render={(props, {match}) => <ModalButton {...props} match={match} defaultState={true} project={props.selectedProject} /> } />
 </>
)

const mapStateToProps = (state, ownProps) => {
  const selectedProject = state.projects.find(project => project.id === +ownProps.match.params.id)

    if (selectedProject) {
      return { selectedProject }
    } else {
      return { project: {} }
    }
}

export default withRouter(connect(mapStateToProps)(ProjectCards))
