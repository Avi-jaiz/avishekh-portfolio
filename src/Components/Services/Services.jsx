import React from 'react';
import './services.css';
import {BsCheckLg} from 'react-icons/bs'

function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
<article className="service">
  <div className="service__head">
    <h3>UI/UX Design</h3>
  </div>

  <div className="service__list">
    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>
  </div>
</article>

{/*End of Ui/Ux */}

        
<article className="service">
  <div className="service__head">
    <h3>Web Development</h3>
  </div>

  <div className="service__list">
    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>
  </div>
</article>
{/*End of Web development*/}
<article className="service">
  <div className="service__head">
    <h3>Content Creation</h3>
  </div>

  <div className="service__list">
    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>

    <li>
    <BsCheckLg  className='service__list-icon' />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, maxime.</p>
    </li>
  </div>
</article>


      </div>


    </section>
  )
}

export default Services