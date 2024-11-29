// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import style from "./Product.module.css";
// import { Link } from "react-router-dom";

// function ProductCard({ product, flex, rederDesc }) {
//   const { image, title, id, rating, price, description } = product;

//   return (
//     <div
//       className={`{style.card_container}  ${flex ? style.product_flexed : ""}`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} />
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         {rederDesc && <div style={{ maxwidth: "750px" }}> {description} </div>}
//         <div className={style.rating}>
//           <Rating value={rating?.rate || 0} precision={0.1} readOnly />

//           <small>{rating?.count || 0} reviews</small>
//         </div>

//         <div>
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className={style.button}>Add to Cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import { useContext } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import style from "./Product.module.css";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product;
  const [{ basket }, dispatch] = useContext(DataContext);

  // Add product to cart
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${style.card__container} ${
        flex ? style.product__flexed : ""
      }`}
    >
      {/* Product Image with Link */}
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={style.img_container} />
      </Link>

      <div>
        {/* Product Title */}
        <h3>{title}</h3>

        {/* Optional Description */}
        {renderDesc && <p style={{ maxWidth: "750px" }}>{description}</p>}

        {/* Product Rating */}
        <div className={style.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count || 0} reviews</small>
        </div>

        {/* Product Price */}
        <div>
          <CurrencyFormat amount={price} />
        </div>

        {/* Add to Cart Button */}
        {renderAdd && (
          <button className={style.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
