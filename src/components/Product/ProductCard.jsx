import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import style from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product, flex }) {
  const { image, title, id, rating, price } = product;

  return (
    <div
      className={`{style.card_container}  ${flex ? style.product_flexed : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={style.rating}>
          {/* Display Rating */}
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          {/* Display Count of Ratings */}
          <small>{rating?.count || 0} reviews</small>
        </div>

        <div>
          {/* Display Price using CurrencyFormat */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={style.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
