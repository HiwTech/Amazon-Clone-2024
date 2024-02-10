import React from 'react'
import clasess from "./Carousel.module.css";
import { Carousel } from "react-responsive-carousel";
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css"; import LayOut from '../LayOut/LayOut';

function CarouselEffect() {
  return (
 
    <div>
        <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false} 
        showThumbs={false}
        >
      {
        img.map((imageItemLink)=>{
            return<img src={imageItemLink}/>
        })
      }
        </Carousel>
        <div className={clasess.hero_img}></div>

    </div>
    
  )
}

export default CarouselEffect;