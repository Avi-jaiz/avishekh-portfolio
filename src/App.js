import React, { useEffect, useState } from 'react'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './index.css';
import Portfolio from './Components/Portfolio/Portfolio';
import Loader from './Components/Loader.jsx/Loader';




function App() {
const [load,setLoad]=useState(true)

useEffect(()=>
{
   setTimeout(()=>
   {
setLoad(false)
   },1000)
},[load]);

  return (
    <>

{load ? <Loader /> :  <div>
  <Header />
    {/* <Nav /> */}
    <About />
    <Experience />
    {/* <Services /> */}
    <Portfolio />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
  </div>  }


    
 
    
    </>
  )
}

export default App;