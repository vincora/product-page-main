import style from "./Counter.module.scss";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";

const Counter = ({setAmount, amount}) => {

  return (
    <div className={style.counter}>
      <button
        className={style.button}
        onClick={() => setAmount((count) => (count ? count - 1 : 0))}
      >
        <img src={minus} alt="" />
      </button>
      {amount}
      <button className={style.button} onClick={() => setAmount((count) => count + 1)}>
        <img src={plus} alt="" />
      </button>
    </div>
  );
};

export default Counter;
