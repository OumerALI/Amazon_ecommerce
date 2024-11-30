import { useContext } from "react";
import LayOut from '../../Components/LayOut/LayOut'

import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import style from "./cart.module.css"
import { Type } from "../../Utility/action.type";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { MdOutlineKeyboardArrowUp } from "react-icons/md";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  
    const total = basket.reduce((amount, item) => {
      return item.price * item.amount + amount;
    }, 0);

    const increment = (item)=>{
      dispatch({
        type: Type.ADD_TO_BASKET,item
      })
    }

    const decrement = (id)=>{
      dispatch({
        type: Type.REMOVE_FROM_BASKET,id
      })
    }
  return (
    <LayOut>
      <section className={style.container}>
        <div className={style.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length == 0 ? (
            <p>Opps ! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={style.cart_product}>
                {/* Render the ProductCard with the passed props */}
                <ProductCard
                  key={i} // Key for the list rendering
                  product={item} // Product data passed to ProductCard
                  render_desc={true} // Render the product description (could be passed as a prop to ProductCard)
                  renderAdd={false} // Assuming this disables the "Add to Cart" button in ProductCard
                  flex={true} // Assuming this is used for flexbox layout in ProductCard
/>
                
                {/* Container for the increment/decrement buttons and amount */}
                <div className={style.btn_container}>
                  {/* Increment button */}
                  <button onClick={() => increment(item)}>
                    <MdOutlineKeyboardArrowUp size={30} />
                  </button>
                  
                  {/* Display the current quantity of the product */}
                  <span>{item.amount}</span>
                  
                  {/* Decrement button */}
                  <button onClick={() => decrement(item.id)}>
                    <MdKeyboardArrowDown size={30} />
                  </button>
                </div>
              </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={style.subtotal}>
            <div>
              <p>Subtotal ({basket?.length}items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This Order Contains a Gift</small>
            </span>
            <Link to={"/payments"}>Continue to CheckOut</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;