import React from 'react';

const Project = (project) => {
  const { id, img, live, repo } = project;

  return (
    <div className='project'>
      <div className='card-faces project-front'>
        <h1>card front</h1>
      </div>
      <div className='card-faces project-back'>
        <h1>card back</h1>
      </div>
    </div>
  );
};

export default Project;
