import React from 'react';
import './portfolio.css';
import Example from '../Files/example.jpg';
import Example2 from '../Files/example2.jpg'
function Portfolio() {
const data = [
  {id:1,image:Example,title:"Project 1",github:'https://www.github.com', demo:"#"},
  {id:2,image:Example,title:"Project 2",github:'https://www.github.com', demo:"#"},
  {id:3,image:Example,title:"Project 3",github:'https://www.github.com', demo:"#"},
  {id:4,image:Example2,title:"Project 4",github:'https://www.github.com', demo:"#"},
  {id:5,image:Example,title:"Project 5",github:'https://www.github.com', demo:"#"}
]

  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>My portfolio</h2>

      <div className="container portfolio__container" >

{data.map(({id,image,title,github,demo})=>(
        <article key={id} className="portfolio__item">
        <div className="portfolio__item-image">
        <img src={image} alt="portfolio-image" />
        
        </div>
        <h3>{title}</h3>
        
        <div className="portfolio__item-cta">
        <a href="https://github.com" target='_blank'className='btn'>Github</a>
        <a href="#" target='_blank'className='btn btn-primary'>Live Demo</a>
        </div>
        
        
        </article>
))}



      </div>
    </section>
  )
}

export default Portfolio