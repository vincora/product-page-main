import { useState, useEffect } from "react";
import style from "./Nav.module.scss";
import menu from "../images/icon-menu.svg";
import menuClose from "../images/icon-close.svg";
import cn from "classnames";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('modal-open', menuOpen)
  }, [menuOpen])

  return (
    <nav>
      <button className={style.button} onClick={() => setMenuOpen(true)}>
        <img src={menu} alt="open menu" />
      </button>

      <div className={cn(style.bodyWrapper, {[style.bodyWrapper_visible] : menuOpen})} onClick={() => setMenuOpen(false)}>
          <div
            className={style.body}
          >
            <button
              className={style.button}
              onClick={() => setMenuOpen(false)}
            >
              <img src={menuClose} alt="close menu" />
            </button>
            <ul className={style.list}>
              <li className={style.item}>
                <a href="#">Collections</a>
              </li>
              <li className={style.item}>
                <a href="#">Men</a>
              </li>
              <li className={style.item}>
                <a href="#">Women</a>
              </li>
              <li className={style.item}>
                <a href="#">About</a>
              </li>
              <li className={style.item}>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
};

export default Nav;
