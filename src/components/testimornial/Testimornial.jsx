import React from 'react'
import './testimornial.css'
import AVTR1 from '../../assets/best3.jpg'
import AVTR2 from '../../assets/best4.jpg'
import AVTR3 from '../../assets/best5.jpg'
import AVTR4 from '../../assets/best6.jpg'


// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avater: AVTR1,
    name : "Rahad",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus id quibusdam officiis quam consequatur rerum quod, eveniet illo, laudantium magnam alias cumque. A, vel assumenda amet dignissimos officia deserunt?"
  
  },
  {
    avater: AVTR2,
    name : "Nuhash",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus id quibusdam officiis quam consequatur rerum quod, eveniet illo, laudantium magnam alias cumque. A, vel assumenda amet dignissimos officia deserunt?"
  
  },
  {
    avater: AVTR3,
    name : "Imad",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus id quibusdam officiis quam consequatur rerum quod, eveniet illo, laudantium magnam alias cumque. A, vel assumenda amet dignissimos officia deserunt?"
  
  },
  {
    avater: AVTR4,
    name : "Nihat",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus id quibusdam officiis quam consequatur rerum quod, eveniet illo, laudantium magnam alias cumque. A, vel assumenda amet dignissimos officia deserunt?"
  
  }
  
  ]


const Testimornial = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h1>Testimornial</h1>
      <Swiper className="container testimornial_contaier">
    
        {
          data.map(({avater, name, review})=>{
            return(
              <SwiperSlide className="testimornial">
          <div className="clients_avatar">
            <img src={avater} alt="Avater One" />
          </div>
          <h5 className='clients_name'>{name}</h5>
            <small className="clients_review">
             {review}
            </small>
        </SwiperSlide>
            )
          })
        }
       
      </Swiper>
    </section>
  )
}

export default Testimornial