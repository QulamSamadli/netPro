
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import style from './SecondSwiper.module.css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';

const images = [
  {id:1,img:"./SwiperLogo2.png",title:"DC Power Systems",description:"Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power"},
{id:2,img:"./SwiperLogo2.png",title:"DC Power Systems",description:"Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power"},
{id:3,img:"./SwiperLogo2.png",title:"DC Power Systems",description:"Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power"},
 
];

const SecondSwiper = () => {
  return (
    <div className=" bg-swiperBg2">
    <div className='container' >
    <h2 className='text-center text-[white] font-bold text-4xl py-5'>Məhsullar</h2>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 25,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      autoplay={{delay:2000}}
      modules={[EffectCoverflow, Pagination,Autoplay]}
      className='h-[420px]'
    >
    {
      images.map(({id,title,img,description})=>{
        return  <SwiperSlide className={` ${style.mySwiperSlide}` } id={id}>
        <img src={img} />
        <h3 className='text-center text-[white]  ' >{title}</h3>
        <p className='text-center text-[white]' >{description}</p>
      </SwiperSlide>
      })
    }
    
    </Swiper>
  </div>
  </div>
  )
}

export default SecondSwiper