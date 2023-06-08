import { useState } from "react";
import style from "./Counter.module.scss";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import { useDispatch, useSelector } from "react-redux";

const Counter = ({setAmount, amount}) => {
  
  const increment = () => {
    setAmount((count) => count + 1);
  };
  const decrement = () => {
    setAmount((count) => (count ? count - 1 : 0));
  };

  return (
    <div className={style.counter}>
      <button
        className={style.button}
        onClick={() => decrement()}
      >
        <img src={minus} alt="" />
      </button>
      {amount}
      <button className={style.button} onClick={() => increment()}>
        <img src={plus} alt="" />
      </button>
    </div>
  );
};

export default Counter;
