import React, { useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { productUrl } from '../../Api/endPoins';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';


function ProductDetail() {


const [product, setProduct] = useState({})
const [isLoading, setIsLoading]= useState(false)
const { productId } = useParams();
console.log(productId)
useEffect(() => {
  setIsLoading(true)
  axios.get(`${productUrl}/products/${productId}`)
    .then((res) => {
      console.log(res.data)
      setProduct(res.data);
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false)
    });
},[]);

  return (
    
    <LayOut>
      {isLoading?(<Loader/>):(  <ProductCard product={product}
      flex={true}
      renderDescription ={true}
      renderAdd={true}
      />)}
    
    </LayOut>
  );
}

export default ProductDetail