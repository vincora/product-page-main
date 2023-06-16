import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import style from "./Cart.module.scss";
import iconCart from "../images/icon-cart.svg";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import iconDelete from "../images/icon-delete.svg";
import Button from "./Button";

const Cart = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setDropdownOpen(false);
  });

  const itemAmount = useSelector((state) => state.amount);
  const itemName = useSelector((state) => state.item.name);
  const itemImg = useSelector((state) => state.item.images?.[0]);
  const itemPrice = useSelector((state) => state.item.currentPrice);

  const cartDispatch = useDispatch();

  const removeItemFromCart = () => {
    cartDispatch({ type: "cart/removeItemFromCart" });
  };

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
        <div className={cn(style.badge, {[style.badge_visible]: itemAmount > 0})}>{itemAmount}</div>
      </a>
      <div
        className={cn(style.dropdown, {
          [style.dropdown_visible]: dropdownOpen,
        })}
      >
        <div className={style.title}>Cart</div>
        {itemAmount > 0 ? (
          <div className={style.body}>
            <div className={style.info}>
              <img src={itemImg} alt="" className={style.thumbnail} />
              <div className={style.text}>
                {itemName}
                <div>
                  ${itemPrice}.00 × {itemAmount}{" "}
                  <span className={style.totalPrice}>
                    ${itemPrice * itemAmount}.00
                  </span>
                </div>
              </div>
              <img src={iconDelete} alt="" className={style.iconDelete} onClick={removeItemFromCart} />
            </div>
            <Button onClick={() => setDropdownOpen(false)}>Checkout</Button>
          </div>
        ) : (
          <div className={style.empty}>Your cart is empty.</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
