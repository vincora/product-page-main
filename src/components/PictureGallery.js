import { useState } from "react";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";
import iconPrevious from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";
import style from "./PictureGallery.module.scss";
import cn from "classnames";
import { useDispatch } from "react-redux";

const PictureGallery = () => {
  const [itemNumber, setItemNumber] = useState(0);

  const pictures = [product1, product2, product3, product4];
  const picThumbs = [thumb1, thumb2, thumb3, thumb4];
  let currentPicture = pictures[Math.abs(itemNumber) % pictures.length];

  const modalDispatch = useDispatch();
  const openModal = () => {
    modalDispatch({type: "modal/setOpen"})
  };

  return (
    <div className={style.layout} >
      <div className={style.currentPicWrapper}>
        <img src={currentPicture} className={style.currentPic} onClick={openModal}/>
        <div
          className={cn(style.arrow, style.arrowPrevious)}
          onClick={() => {
            setItemNumber((current) => current - 1);
          }}
        >
          <img src={iconPrevious} alt="previous" />
        </div>
        <div
          className={cn(style.arrow, style.arrowNext)}
          onClick={() => {
            setItemNumber((current) => current + 1);
          }}
        >
          <img src={iconNext} alt="next" />
        </div>
      </div>
      <div className={style.thumbnails}>
        {picThumbs.map((item, number) => {
          return (
            <div
              key={number}
              className={cn(style.thumbPic, {
                [style.thumbPic_active]: Math.abs(itemNumber) % picThumbs.length === number,
              })}
              onClick={() => {
                setItemNumber(number);
              }}
            >
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PictureGallery;
