import { useContext } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import style from './Cart.module.css';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import { Link } from 'react-router-dom';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import {Type} from '../../Utility/action.type'
import LayOut from '../../Components/LayOut/LayOut';
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  // Calculate the total cost of items in the basket
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  // Increment the amount of a product in the basket
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  // Decrement the amount of a product in the basket
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={style.container}>
        <div className={style.cart__container}>
          <h2>Hello {user ? user.name : "Guest"}</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket.length === 0 ? (
            <p>Oops! No items in your cart. Browse our products!</p>
          ) : (
            basket.map((item, i) => (
              <section key={i} className={style.cart_product}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />
                <div className={style.btn_container}>
                  <button className={style.btn} onClick={() => increment(item)}>
                    <IoIosArrowUp size={25} />
                  </button>

                  <span>{item.amount}</span>

                  <button
                    className={style.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={25} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket.length !== 0 && (
          <div className={style.subtotal}>
            <div>
              <p>Subtotal ({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;