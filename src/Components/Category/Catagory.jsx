import React from 'react'
import { categoryInfos } from './CatagoryFullInfos'
import CategoryCard from './CategoryCard'
import classes from "./Category.module.css";


function Catagory() {
  return (
    <section className={classes.category_container}>
      {
      categoryInfos.map((infos) => (
        // console.log(infos) // Log the current item
         <CategoryCard data={infos}  />
      ))
}
    </section>
  )
  
}

export default Catagory