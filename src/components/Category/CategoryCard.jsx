// import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Style from "./Category.module.css"; // Import CSS styles

function CategoryCard({ data }) {
  // Destructure data for easier usage
  const { title, imgLink, name } = data;

  return (
    <div className={Style.category}>
      <Link to={`/category/${name}`}>
        <span>
          <h2>{title}</h2>
        </span>
        <img src={imgLink} alt={title} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
