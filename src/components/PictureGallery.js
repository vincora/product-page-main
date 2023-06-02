import { useState } from "react";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import iconPrevious from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";
import style from "./PictureGallery.module.scss";

const PictureGallery = () => {
  const [itemNumber, setItemNumber] = useState(0);

  const pictures = [product1, product2, product3, product4];
  let currentPicture = pictures[Math.abs(itemNumber) % pictures.length];

  return (
    <div>
      <div className={style.item}>
        <img src={currentPicture} alt="" />
        <div
          className={style.arrowPrevious}
          onClick={() => {
            setItemNumber((current) => current - 1);
          }}
        >
          <img src={iconPrevious} alt="previous" />
        </div>
        <div
          className={style.arrowNext}
          onClick={() => {
            setItemNumber((current) => current + 1);
          }}
        >
          <img src={iconNext} alt="next" />
        </div>
      </div>
    </div>
  );
};

export default PictureGallery;
