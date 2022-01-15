import React from 'react';

const Front = ({ data }) => {
  return (
    <div className='front-end'>
      <h4 className='stack'>Front End</h4>
      {data.slice(0, 3).map((skill) => {
        const { id, tech, rate } = skill;
        return (
          <article className='skill' key={id}>
            <p className='tech'>{tech}</p>
            <div className='skill-container'>
              <div className='skill-value' style={{ width: `${rate}%` }}></div>
              <p className='skill-text' style={{ left: `${rate}%` }}>
                {rate}%
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Front;
