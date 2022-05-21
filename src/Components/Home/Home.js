import React from 'react';
import Underline from '../Utils/Underline';
import links from '../socialLinks';
import heroImage from '../Assets/Untitled5.png';
import Animation from './Animation';

const Home = () => {
  return (
    <article className='hero' id='#Home'>
      <div className='hero-center'>
        <div className='hero-info'>
          <h1>Hi,</h1>
          <Underline />
          <h1>I'm Salih</h1>
          <span>Full Stack Web Developer</span>
          <div className='btn-container'>
            <button className='btn hire-btn'>
              <a href='mailto:sal.alperen1@gmail.com'>Hire me</a>
            </button>
            <a className='btn work-btn' href='#Projects'>
              See my works
            </a>
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
      <Animation />
    </article>
  );
};

export default Home;
