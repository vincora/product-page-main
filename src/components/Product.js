import { useState } from "react";
import style from "./Product.module.scss";
import cart from "../images/icon-cart-light.svg";
import Counter from "./Counter";
import { product } from "../ItemInfo.js";
import { useDispatch } from "react-redux";
import Button from "./Button";

const ProductInfo = () => {
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();
  const addItemsToCart = () => {
    dispatch({ type: "cart/addItemsToCart", payload: amount });
  };

  return (
    <div className={style.wrapper}>
      <div className={style.company}>{product.company}</div>
      <div className={style.name}>{product.name}</div>
      <div className={style.description}>{product.description}</div>
      <div className={style.price}>
        <div className={style.currentPriceWrapper}>
          <div className={style.currentPrice}>${product.currentPrice}.00</div>
          <div className={style.discount}>{product.discount}%</div>
        </div>
        <div className={style.oldPrice}>${product.initPrice}.00</div>
      </div>
      <div className={style.actionSection}>
        <Counter setAmount={setAmount} amount={amount} />
        <Button onClick={addItemsToCart}>
          <img src={cart} alt="" />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
