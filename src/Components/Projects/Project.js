import React from 'react';

const Project = (project) => {
  const { image, live, repo, name, exp, techs } = project;
  console.log(techs);

  return (
    <div className='project'>
      <div className='card-faces project-front'>
        <div className='img-container'>
          <img src={image} alt='img' />
        </div>
        <div className='project-info'>
          <span className='name'>{name}</span>
          <p className='exp'>{exp} </p>
        </div>
      </div>
      <div className='card-faces project-back'>
        <div className='technologies'>
          {techs.map((tech, index) => {
            return (
              <p key={index}>
                <span className='tech'>{tech}</span>
              </p>
            );
          })}
        </div>
        <div className='link-container'>
          <span>
            <a
              href={live}
              rel='noreferrer'
              className='project-link'
              target='_blank'
            >
              Live
            </a>
          </span>
          <span>
            <a href={repo} rel='noreferrer' className='project-link'>
              Code
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
