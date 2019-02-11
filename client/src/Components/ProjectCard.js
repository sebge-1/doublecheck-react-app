import React from 'react';
import {Card, CardTitle, CardImg, CardBody, CardText, Button, Col } from 'reactstrap';
import {FaTrash} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectCard = (props) =>
<Col md="6" sm="12" className="project">
  <Card key={props.project.id}>
    <CardImg top src={require("../images/" + props.project.img)} alt="Card image cap" />
    <CardBody>
      <CardTitle className="text-center text-muted"><em>{props.project.title}</em></CardTitle>
      <CardText>{props.project.text}</CardText>
        <div className="text-center">
          <Link to={`/projects/${props.project.id}`}>
            See Details
          </Link>
        </div>
        <Button style={{backgroundColor: 'white', border: 'none'}}>
          <FaTrash onClick={() => props.delete(props.project)} style={{color: 'black'}} />
        </Button>
    </CardBody>
  </Card>
</Col>

export default ProjectCard
