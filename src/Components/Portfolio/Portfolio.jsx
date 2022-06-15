import React from 'react';
import './portfolio.css';
// import Example from '../Files/example.jpg';
// import Example2 from '../Files/example2.jpg';
import portfolio_avi from '../Files/portfolio_avi.png'
import weather_app from '../Files/weather_app.png'

function Portfolio() {
const data = [
  {id:1,image:portfolio_avi,title:"Portfolio",github:'https://github.com/Avi-jaiz/avishekh-portfolio', demo:"https://avishekh-portfolio.netlify.app/"},
  {id:2,image:weather_app,title:"Weather App",github:'https://github.com/Avi-jaiz/Weather-app', demo:"https://green-weather-app.netlify.app/"},
 
]

  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>My portfolio</h2>

      <div className="container portfolio__container" >

{data.map(({id,image,title,github,demo})=>(
        <article key={id} className="portfolio__item">
        <div className="portfolio__item-image">
        <img src={image} alt="portfolio-img" />
        
        </div>
        <h3>{title}</h3>
        
        <div className="portfolio__item-cta">
        <a href={github} target='_blank' rel='noreferrer' className='btn'>Github</a>
        <a href={demo} target='_blank' rel ='noreferrer' className='btn btn-primary'>Live Demo</a>
        </div>
        
        
        </article>
))}



      </div>
    </section>
  )
}

export default Portfolio