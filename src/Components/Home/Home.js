import React from 'react';
import Underline from '../Utils/Underline';
import links from '../socialLinks';
import heroImage from '../Assets/Untitled5.png';

const Home = () => {
  return (
    <article className='hero'>
      <div className='hero-center'>
        <div className='hero-info'>
          <h1>Hi,</h1>
          <Underline />
          <h1>I'm Salih</h1>
          <span>Full Stack UI/UX Designer</span>
          <div className='btn-container'>
            <button className='btn hire-btn'>Hire me </button>
            <button className='btn work-btn'>See my works</button>
          </div>

          <ul className='sidebar-social'>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.link} className='icon' target='_blank'>
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='hero-img-container'>
          <img src={heroImage} alt='' className='hero-image' />
        </div>
      </div>
    </article>
  );
};

export default Home;
