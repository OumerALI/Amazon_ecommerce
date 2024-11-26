// import React from "react";
import { categoryInfos } from "./CategoryInfo"; // Import categoryInfos correctly
import CategoryCard from "./CategoryCard"; // Import the CategoryCard component
import Style from "./Category.module.css"; // Import CSS styles

function Category() {
  return (
    <section className={Style.Category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} key={infos.name} />
      ))}
    </section>
  );
}

export default Category;

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   const filterProductsByCategory = (category) => {
//     return products.filter(product => product.category === category);
//   };

//   return (
//     <div>
//       <h1>Electronics</h1>
//       <ul>
//         {filterProductsByCategory('electronics').map(product => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <p>{product.title}</p>
//           </li>
//         ))}
//       </ul>

//       <h1>Men's Clothing</h1>
//       <ul>
//         {filterProductsByCategory('men's clothing').map(product => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <p>{product.title}</p>
//           </li>
//         ))}
//       </ul>

//       <h1>Women's Clothing</h1>
//       <ul>
//         {filterProductsByCategory('women's clothing').map(product => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <p>{product.title}</p>
//           </li>
//         ))}
//       </ul>

//       <h1>Jewelery</h1>
//       <ul>
//         {filterProductsByCategory('jewelery').map(product => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <p>{product.title}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
