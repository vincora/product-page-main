import React from 'react';
import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import menuClose from '../images/icon-close.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
 
const Header = () => {
  return (
    <header>
        <nav>
            <img src={menu} alt="open menu" />
            <img src={menuClose} alt="close menu" />
            <ul>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <a href="#"><img src={logo} alt="logo" /></a>
        <a href="#"><img src={cart} alt="cart" /></a>
        <a href="#"><img src={avatar} alt="avatar" /></a>
    </header>
  )
}

export default Header