import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import Carousel from '../../Components/Carousel/Carousel'
import Catagory from '../../Components/Category/Catagory'
import Product from '../../Components/Product/Product'
import Footer from '../../Components/Footer/Footer'


function Landing() {
  return (
    <LayOut>
      <Carousel/>
      <Catagory/>
      <Product/>
      <Footer/>
    </LayOut>
  );
}

export default Landing