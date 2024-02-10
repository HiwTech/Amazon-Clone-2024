import React, { useState, useEffect } from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoins'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {categoryName} = useParams();
  // console.log(categoryName)

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
         console.log(res)
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [])
  


  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>{categoryName}</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              // console.log(product)
              <ProductCard key={product.id} product={product} 
              renderAdd={true}
              renderDescription={false}/>
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results