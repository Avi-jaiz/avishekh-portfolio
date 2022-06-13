import React from 'react';
import CTA from './CTA';
import './Header.css';
import Profile_pic from '../Files/Profile_pic.jpg'
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Avishekh Jaiswal</h1>
        <h5 className="text-light">Front End Developer | React</h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={Profile_pic} alt="profile-pic" className='profile-pic' />
      </div>

      <a href="#footer" className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default Header