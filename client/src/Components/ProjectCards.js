import React from 'react'
import { CardDeck } from 'reactstrap';
import ProjectCard from './ProjectCard.js'

const ProjectCards = props => (
    <CardDeck>
      {props.projects.map(project => (
        <ProjectCard key={project.id} project={project} delete={props.delete}/>
      )
     )}
   </CardDeck>
)



export default ProjectCards
