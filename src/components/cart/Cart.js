import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import style from "./Cart.module.scss";
import cart from "../../images/icon-cart.svg";
import cn from "classnames";
import { useSelector } from "react-redux";

const Cart = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setDropdownOpen(false);
  });

  const itemsAmount = useSelector((state) => state.amount);

  return (
    <div className={style.cart} ref={ref}>
      <a
        href="#"
        className={style.icon}
        onClick={() => {
          setDropdownOpen((current) => !current);
        }}
      >
        <img src={cart} alt="cart" />
      </a>
      <div
        className={cn(style.dropdown, {
          [style.dropdown_visible]: dropdownOpen,
        })}
      >
        <div className={style.title}>Cart</div>
        {itemsAmount > 0 ? (
          <div className={style.info}>{itemsAmount}</div>
        ) : (
          <div className={style.empty}>Your cart is empty.</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
