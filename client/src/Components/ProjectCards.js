import React from 'react';
import ModalButton from './ModalButton.js'
import {CardDeck, Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';

const ProjectCards = (props) => (
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
)

export default ProjectCards;
