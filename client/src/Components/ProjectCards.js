import React from 'react';
import {CardDeck, Card, CardTitle, CardImg, CardBody, CardText, Button } from 'reactstrap';

const ProjectCards = (props) => (
  <CardDeck>
    {props.projects.map(project => (
      <Card>
        {/* <CardImg top width="80%" src={require("../images/" + project.image)} alt="Card image cap" /> */}
        <CardBody>
          {/* <CardTitle className="text-center text-muted"><em>{projet.title}</em></CardTitle> */}
          <CardText>{project.text}</CardText>
           <Button className="showButton btn-sm">See Details</Button>
       </CardBody>
     </Card>
   )
   )}
  </CardDeck>
)

export default ProjectCards;
