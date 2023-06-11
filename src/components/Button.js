import React from 'react';
import style from './Button.module.scss';
import cn from 'classnames';

const Button = ({children, shadow, onClick}) => {
  return (
    <button onClick={onClick} className={cn(style.button, {[style.button_product]: shadow})}>
        {children}
    </button>
  )
}

export default Button