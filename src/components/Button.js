import React from 'react';
import style from './Button.module.scss';
import cn from 'classnames';

const Button = ({children, shadow}) => {
  return (
    <button className={cn(style.button, {[style.button_product]: shadow})}>
        {children}
    </button>
  )
}

export default Button