import { useState } from 'react';
import style from './Counter.module.scss';
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';

const Counter = () => {

    const [count, setCount] = useState(0)

  return (
    <div className={style.counter}>
        <button className={style.button} onClick={()=>{
            setCount((count) => count === 0 ? 0 : count - 1)
        }}><img src={minus} alt="" /></button>
        {count}
        <button className={style.button} onClick={()=>{
            setCount((count) => count + 1)}} ><img src={plus} alt="" /></button>
    </div>
  )
}

export default Counter