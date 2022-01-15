import React from 'react';

const Back = ({ data }) => {
  return (
    <div>
      <div className='front-end'>
        <h4 className='stack'>Back End</h4>
        {data.slice(3).map((skill) => {
          const { id, tech, rate } = skill;
          return (
            <article className='skill' key={id}>
              <p className='tech'>{tech}</p>
              <div className='skill-container'>
                <div
                  className='skill-value'
                  style={{ width: `${rate}%` }}
                ></div>
                <p className='skill-text' style={{ left: `${rate}%` }}>
                  {rate}%
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Back;
