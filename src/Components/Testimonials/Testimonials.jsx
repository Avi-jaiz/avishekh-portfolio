import React from 'react'
import './testimonials.css';
import client__avatar from '../Files/Client_avatar.png';



import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data =[
  {id:1,avatar:client__avatar,client_name:"Ernest Archiver 1",review:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ad, minus nisi quod omnis quae labore reprehenderit consectetur suscipit fuga incidunt, amet blanditiis autem soluta eligendi nemo nobis unde accusantium!"},
  {id:2,avatar:client__avatar,client_name:"Ernest Archiver 2",review:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ad, minus nisi quod omnis quae labore reprehenderit consectetur suscipit fuga incidunt, amet blanditiis autem soluta eligendi nemo nobis unde accusantium!"},
  {id:3,avatar:client__avatar,client_name:"Ernest Archiver 3",review:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ad, minus nisi quod omnis quae labore reprehenderit consectetur suscipit fuga incidunt, amet blanditiis autem soluta eligendi nemo nobis unde accusantium!"},
  {id:4,avatar:client__avatar,client_name:"Ernest Archiver 4",review:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ad, minus nisi quod omnis quae labore reprehenderit consectetur suscipit fuga incidunt, amet blanditiis autem soluta eligendi nemo nobis unde accusantium!"},
  {id:5,avatar:client__avatar,client_name:"Ernest Archiver 5",review:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ad, minus nisi quod omnis quae labore reprehenderit consectetur suscipit fuga incidunt, amet blanditiis autem soluta eligendi nemo nobis unde accusantium!"},
];

function Testimonials() {



  return (
    <section>
<h5>Review from clients</h5>
<h2>Testimonials</h2>

<Swiper className="container testimonials__container"
 modules={[Pagination]}
 spaceBetween={40}
 slidesPerView={1}
 navigation
 pagination={{ clickable: true }}
>



{data.map(({id,avatar,client_name,review})=>
(

  <SwiperSlide key={id} className="testimonial">
  <div className="client__avatar">
    
    <img src={avatar} alt=""/>
   
  </div>
  
  <h5 className="client__name">{client_name}</h5>
  
  <small className="client__review">
  {review}
  </small>
  
  </SwiperSlide>
))}

 


  
 






</Swiper>

    </section>
  )
}

export default Testimonials