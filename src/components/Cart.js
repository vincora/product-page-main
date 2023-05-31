import { useState } from "react";
import style from "./Cart.module.scss";
import cart from "../images/icon-cart.svg";
import cn from "classnames";

const Cart = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={style.cart}>
      <a
        href="#"
        className={style.icon}
        onClick={() => {
          setDropdownOpen(true);
        }}
        onMouseOver={() => {
          setDropdownOpen(true);
        }}
      >
        <img src={cart} alt="cart" />
      </a>
      <div
        className={cn(style.dropdown, {
          [style.dropdown_visible]: dropdownOpen,
        })}
        onMouseLeave={() => {
          setTimeout(() => {
            setDropdownOpen(false);
          }, 500);
        }}
      >
        <div className={style.title}>Cart</div>
        <div className={style.info}>Your cart is empty.</div>
      </div>
    </div>
  );
};

export default Cart;
