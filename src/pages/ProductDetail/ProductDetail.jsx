import LayOut from "../../components/LayOut/LayOut";
// import style from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productUrl } from "../../Api/EndPoints";
import axios from "axios";
// import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const [product, setproduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard product={product} flex={true} rederDesc={true} />
      )}
    </LayOut>
  );
}

export default ProductDetail;
