import Style from "./Category.module.css";

import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  // Destructure `data` for easier usage
  const { title, imgLink, name } = data;

  // Logging for debugging purposes
  console.log(imgLink);

  return (
    <div className={Style.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt={title} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
