import React from 'react'
import {CardDeck, Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import {Route, Link} from 'react-router-dom';
import {FaTrash} from 'react-icons/fa';

const ProjectCards = props => (
  <>
    <CardDeck>
      {props.projects.map(project => (
        <Card>
          <CardImg top width="80%" src={require("../images/" + project.img)} alt="Card image cap" />
          <CardBody>
            <CardTitle className="text-center text-muted"><em>{project.title}</em></CardTitle>
            <CardText>{project.text}</CardText>
            <div className="text-center">
            <Link to={`/projects/${project.id}`}>
              See Details
            </Link>
          </div>
          <div>
            <FaTrash onClick={() => props.delete(project)} />
          </div>
          </CardBody>
       </Card>
      )
     )}
   </CardDeck>
</>
)



export default ProjectCards
