import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import style from "./Product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data); // Sets the products from the API response
        isLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        isLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={style.products_container}>
          {products.map((singleProduct) => (
            <ProductCard product={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
