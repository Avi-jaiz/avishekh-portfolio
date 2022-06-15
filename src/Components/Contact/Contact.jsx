import React ,{useRef} from 'react'
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {FaFacebookMessenger} from 'react-icons/fa';
import {BsWhatsapp} from "react-icons/bs";
import emailjs from 'emailjs-com';
import { useState } from 'react';





function Contact() {
  const[messageSent,setMessageSent]=useState(false)





  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
setMessageSent(true)

    emailjs.sendForm('service_cuuhnar', 'template_9jwwmlq', form.current, '5Mpct5l-ydoB2QvPY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
<div className="container contact__container">
<div className="contact__options">

<article className="contact__option">
  <HiOutlineMail className='contact__option-icon'/>
  <h4>Email</h4>
  <h5>j.avishekh2021@gmail.com</h5>
  <a href="mailto:j.avishekh2021@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
</article>



<article className="contact__option">
  <FaFacebookMessenger className='contact__option-icon'/>
  <h4>Messenger</h4>
  <h5>Facebook</h5>
  <a href="https://m.me/avishekh.jaiswal.9" target="_blank" rel='noreferrer'>Send a message</a>
</article>



<article className="contact__option">
  <BsWhatsapp className='contact__option-icon'/>
  <h4>Whatsapp</h4>
  <h5>+91 8917244494</h5>
  <a href="https://api.whatsapp.com/send?phone=8917244494" target ='_blank' rel='noreferrer'>Send a message</a>
</article>

</div>
{/* End of Contact options */}
<form ref={form} onSubmit={sendEmail} >
<input type='text' onChange={()=>setMessageSent(false)} name='name' placeholder='Full Name' required/>

<input type="email" onChange={()=>setMessageSent(false)} name='email' placeholder='Your Email' required />

<textarea name="message" onChange={()=>setMessageSent(false)} rows="7" placeholder='Your Message' required />

<button type='sumbit' className='btn btn-primary'>Send Message</button>

{messageSent===true? <p className='btn' >Message Sent</p> : ""}


</form>



</div>


    </section>
  )
}

export default Contact