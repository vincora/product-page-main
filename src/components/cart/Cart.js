import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import style from "./Cart.module.scss";
import iconCart from "../../images/icon-cart.svg";
import cn from "classnames";
import { useSelector } from "react-redux";
import iconDelete from '../../images/icon-delete.svg';
import Button from "../Button";

const Cart = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setDropdownOpen(false);
  });

  const itemAmount = useSelector(state => state.amount);
  const itemName = useSelector(state => state.item.name);
  const itemImg = useSelector(state => state.item.img);
  const itemPrice = useSelector(state => state.item.currentPrice);

  return (
    <div className={style.cart} ref={ref}>
      <a
        href="#"
        className={style.icon}
        onClick={() => {
          setDropdownOpen((current) => !current);
        }}
      >
        <img src={iconCart} alt="cart" />
      </a>
      <div
        className={cn(style.dropdown, {
          [style.dropdown_visible]: dropdownOpen,
        })}
      >
        <div className={style.title}>Cart</div>
        {itemAmount > 0 ? (
          <div className={style.con}>
            <div className={style.info}>
              <img src={itemImg} alt="" />
              <div className={style.text}>
                {itemName}
                <div>${itemPrice}.00 × {itemAmount} <span className={style.totalPrice}>${itemPrice*itemAmount}.00</span></div>
              </div>
              <img src={iconDelete} alt="" />
            </div>
            <Button>Checkout</Button>
          </div>
        ) : (
          <div className={style.empty}>Your cart is empty.</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
