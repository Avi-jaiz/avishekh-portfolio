import React from 'react';
import './footer.css';
import {GrFacebookOption} from 'react-icons/gr';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedin} from 'react-icons/fa';


function Footer() {
  return (
   <footer id='footer'>
    <a href="#" className='footer__logo'>AVISHEKH</a>
    <ul className="permalinks">

<li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#experience">Experience</a></li>
{/* <li><a href="#testimonials">Testimonials</a></li>
<li><a href="#services">Services</a></li> */}
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#contact">Contact</a></li>


    </ul>

    <div className="footer__socials">

<form className='socials'>
         
<button type='submit' form action="https://www.facebook.com/avishekh.jaiswal.9/"><GrFacebookOption /></button>
<button type ='submit' form action="https://twitter.com/Jaiz_Avi"><AiOutlineTwitter /></button>
<button form action="https://twitter.com/Jaiz_Avi"><FaLinkedin /></button>
         
         
         
        
      </form>



</div>
<div className="footer__copyright">
  <small>&copy; Avishekh Jaiswal. All rights reserved</small>
</div>
   </footer>
  )
}

export default Footer