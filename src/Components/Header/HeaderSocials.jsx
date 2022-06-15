import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub,BsFacebook} from 'react-icons/bs';

function HeaderSocials() {
  return (
    <div className='header__socials'>

<a href="https://www.linkedin.com/in/avishek-jaiswal-b4ab31229/" target="_blank" ><BsLinkedin /></a>


<a href="https://github.com/Avi-jaiz" target="_blank" ><BsGithub /></a>
<a href="https://www.facebook.com/avishekh.jaiswal.9/" target="_blank" ><BsFacebook /></a>


    </div>
  )
}

export default HeaderSocials