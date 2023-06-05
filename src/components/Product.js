import React from "react";
import style from "./Product.module.scss";
import cart from '../images/icon-cart-light.svg'
import Counter from "./Counter";

const ProductInfo = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.company}>Sneaker Company</div>
      <div className={style.name}>Fall Limited Edition Sneakers</div>
      <div className={style.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </div>
      <div className={style.price}>
        <div className={style.currentPriceWrapper}>
          <div className={style.currentPrice}>$125.00</div>
          <div className={style.discount}>50%</div>
        </div>
        <div className={style.oldPrice}>$250.00</div>
      </div>
      <div className={style.actionSection}>
        <Counter/>
        <button className={style.button}>
          <img src={cart} alt="" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
