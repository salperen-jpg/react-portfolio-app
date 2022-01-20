import React from 'react';
import Underline from '../Utils/Underline';
import Project from './Project';
import projects from './ProjectList';
const Projects = () => {
  return (
    <article className='projects' id='Projects'>
      <div className='section-title'>
        <h3>Projects</h3>
        <Underline />
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </article>
  );
};

export default Projects;
