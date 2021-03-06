import React from 'react';
import { useGlobalContext } from '../context';
import { MdDarkMode } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='logo'>
          <span className='first'>salih</span>
          <span className='last'>Alperen</span>
        </div>
        <div className='nav-right'>
          <ul className='nav-links'>
            <li>
              <a href='#Projects'>Projects</a>
            </li>
            <li>
              <a href='#Skills'>Skills</a>
            </li>
            <li>
              <a href='#About'>About</a>
            </li>
          </ul>

          {/* <div className='theme icon'>
            <MdDarkMode />
          </div> */}

          <div className='nav-hamburger icon' onClick={openSidebar}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
