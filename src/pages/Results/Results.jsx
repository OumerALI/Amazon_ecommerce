import { useEffect, useState } from "react"; // Importing from React
import { useParams } from "react-router-dom"; // React Router hooks
import axios from "axios";

import LayOut from "../../components/LayOut/LayOut"; // Custom component
import style from "./Results.module.css"; // CSS Module
import { productUrl } from "../../Api/EndPoints"; // API endpoint

function Results() {
  const [results, setResults] = useState([]); // State for storing results
  const { categoryName } = useParams(); // Getting route parameters

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`) // Fetching products by category
      .then((res) => {
        setResults(res.data); // Storing fetched data in state
      })
      .catch((err) => {
        console.log(err); // Logging errors
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category/{categoryName}</p>
        <hr />
        <div className={style.products_container}>
          {results?.map((product) => {
            <productCard key={product.id} product={product} />;
          })}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
