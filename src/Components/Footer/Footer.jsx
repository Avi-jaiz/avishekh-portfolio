import React from 'react';
import './footer.css';
import {GrFacebookOption} from 'react-icons/gr';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedin} from 'react-icons/fa';


function Footer() {
  return (
   <footer id='footer'>

<form >
<button type='submit' className='footer__logo' form action="https://avishekh-portfolio.netlify.app/#about">AVISHEKH</button>
</form>
   
<div className="permalinks">
    <form className='permalinks' >

   


<button type='submit' form action="#">Home</button>
<button type='submit' form action="#About">About</button>
<button type='submit' form action="#experience">Experience</button>
<button type='submit' form action="#portfolio">Portfolio</button>
<button type='submit' form action="#contact">contact</button>

{/* <li><a href="#contact">Contact</a></li> */}


    </form>
    </div>
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