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
    <nav>

      <a href="#" title="Home" onClick={()=>SetActiveNav("#")}className={activeNav==="#" ? 'active':""}><AiOutlineHome /> </a>

<a href="#about" title="About" onClick={()=>SetActiveNav('#about')} className={activeNav==="#about"?"active": ""}><AiOutlineUser /></a>

<a href="#experience" title="Experience" onClick={()=>SetActiveNav("#experience")} className={activeNav==="#experience" ? 'active':""}><FiBookOpen /></a>
<a href="#portfolio" title="Services" onClick={()=>SetActiveNav("#services")} className={activeNav==="#services"? "active" :""} ><RiServiceLine /></a>
<a href="#contact" title="Contacts" onClick={()=>SetActiveNav("#contacts")} className={activeNav==="#contacts"?"active":""}><AiOutlineContacts /></a>

    </nav>
  )
}

export default Nav