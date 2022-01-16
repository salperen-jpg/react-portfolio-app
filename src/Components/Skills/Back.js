import React from 'react';

const Back = ({ data }) => {
  return (
    <div className='front-end'>
      <h4 className='stack'>Back End</h4>
      <div className='techs'>
        {data.slice(3).map((skill) => {
          const { id, tech, rate } = skill;
          return (
            <article className='skill' key={id}>
              <div className='circle-container'>
                <span className='tech'>{tech}</span>
                <div
                  className='tech-info'
                  style={{ height: `${rate}%`, borderRadius: `${rate}%` }}
                >
                  <p className='rate'>{rate}%</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Back;
