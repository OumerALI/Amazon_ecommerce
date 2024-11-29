import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import style from "./Header.module.css";

function Header() {
  return (
    <>
      <section>
        <div className={style.header_container}>
          {/* logo */}
          <div className={style.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon"
              />
            </Link>
            <div className={style.delivery}>
              <span>
                <SlLocationPin />
              </span>

              <p>Delivered to</p>
              <span>KSA</span>
            </div>
          </div>

          {/* search */}
          <div className={style.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch size={25} />
          </div>
          {/* rigth side link  */}
          <div className={style.order_container}>
            <a href="" className={style.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1600px-Flag_of_the_United_States.svg.png?20151118161041"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>

            <Link to="Sign In">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            {/* orders  */}
            <Link to="/orders">
              <p>return</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={style.cart}>
              <BiCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}
export default Header;
