import React from 'react';
import links from '../socialLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-center'>
        <span>&copy; All rights reserved</span>
        <ul className='footer-social'>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.link}
                  className='icon footer-icon'
                  target='_blank'
                >
                  {link.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
