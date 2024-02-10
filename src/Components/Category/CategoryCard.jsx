import React from "react";
import { Link } from "react-router-dom";
import classes from "./Category.module.css";

function CategoryCard({ data }) {
  console.log(data)
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h4>{data.title}</h4>
        </span>
        <img src={data.imageLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
}
export default CategoryCard;
