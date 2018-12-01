import React from 'react'
import { CardDeck } from 'reactstrap';
import ProjectCard from './ProjectCard.js'

const ProjectCards = props => (
    <CardDeck>
      {props.projects.map(project => (
        <ProjectCard project={project} delete={props.delete}/>
      )
     )}
   </CardDeck>
)



export default ProjectCards
