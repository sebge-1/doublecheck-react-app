import React from 'react'
import { Container, Row } from 'reactstrap';
import ProjectCard from './ProjectCard.js'

const ProjectCards = props => (
    <Container className="text-center">
       <Row>
        {props.projects.map(project => (
          <ProjectCard key={project.id} project={project} delete={props.delete}/>
        )
       )}
    </Row>
   </Container>
)



export default ProjectCards
