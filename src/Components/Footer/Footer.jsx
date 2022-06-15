import React from 'react';
import './footer.css';
import {GrFacebookOption} from 'react-icons/gr';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedin} from 'react-icons/fa';
import Experience from '../Experience/Experience';


function Footer() {
  return (
   <footer id='footer'>

<form >
<button type='submit' className='footer__logo' form action="https://avishekh-portfolio.netlify.app/#about">AVISHEKH</button>
</form>
   
<div className="permalinks">
    

  
{/* 
<button type='submit' form action="#">Home</button>
<button type='submit' form action="https://avishekh-portfolio.netlify.app/#about">About</button>
<button type='submit' form action="https://avishekh-portfolio.netlify.app/#experience">Experience</button>
<button type='submit' form action="https://avishekh-portfolio.netlify.app/#portfolio">Portfolio</button>
<button type='submit' form action="https://avishekh-portfolio.netlify.app/#contact">contact</button> */}

{/* <li><a href="#contact">Contact</a></li> */}


    
    </div>
    <div className="footer__socials">

<div className='socials'>
         
<a href="https://www.facebook.com/avishekh.jaiswal.9/" target="_blank" rel="noreferrer"><GrFacebookOption /></a>

<a href="https://twitter.com/Jaiz_Avi" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>

<a href="https://www.linkedin.com/in/avishek-jaiswal-b4ab31229/" target="_blank" rel="noreferrer"><FaLinkedin /></a>

         
         
         
        
      </div>



</div>
<div className="footer__copyright">
  <small>&copy; Avishekh Jaiswal. All rights reserved</small>
</div>
   </footer>
  )
}

export default Footer