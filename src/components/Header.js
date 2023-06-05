import { useState } from "react";
import style from "./Header.module.scss";
import logo from "../images/logo.svg";


import avatar from "../images/image-avatar.png";
import Nav from "./Nav";
import Cart from "./Cart";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.left}>
          <Nav></Nav>
          <a href="#" className={style.logo}>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={style.right}>
          <Cart></Cart>
          <a href="#" className={style.avatar}>
            <img src={avatar} alt="avatar" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
