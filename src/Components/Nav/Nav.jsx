import React from 'react';
import './nav.css';
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai";
import {FiBookOpen} from 'react-icons/fi';
import {RiServiceLine} from 'react-icons/ri';
import {AiOutlineContacts} from 'react-icons/ai';
import {useState} from 'react';



function Nav() {
const [activeNav,SetActiveNav]=useState("#");



  return (


    
      <form className='nav'>

<button type ='submit' form action ='#' title="Home" onClick={()=>SetActiveNav("#")}className={activeNav==="#" ? 'active':""}><AiOutlineHome /> </button>

<button type ='submit' form action ='https://avishekh-portfolio.netlify.app/#about' title="About" onClick={()=>SetActiveNav("about")}className={activeNav==="about" ? 'active':""}><AiOutlineUser /> </button>

<button type ='submit' form action ='https://avishekh-portfolio.netlify.app/#experience' title="Experience" onClick={()=>SetActiveNav("experience")}className={activeNav==="experience" ? 'active':""}><FiBookOpen /> </button>

<button type ='submit' form action ='https://avishekh-portfolio.netlify.app/#portfolio' title="Portfolio" onClick={()=>SetActiveNav("portfolio")}className={activeNav==="portfolio" ? 'active':""}><RiServiceLine /> </button>

<button type ='submit' form action ='https://avishekh-portfolio.netlify.app/#contact' title="Contact" onClick={()=>SetActiveNav("contact")}className={activeNav==="contact" ? 'active':""}><AiOutlineContacts /> </button>





</form>

    


  )
}

export default Nav