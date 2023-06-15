import style from "./GalleryModal.module.scss";
import { useState, useRef } from "react";
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
import cn from "classnames";
import { useClickAway } from "react-use";
import { useDispatch, useSelector } from "react-redux";

const GalleryModal = () => {
  const [itemNumber, setItemNumber] = useState(0);
  const ref = useRef(null);
  useClickAway(ref, () => {
    closeModal();
  });

  const modalDispatch = useDispatch();

  const closeModal = () => {
    modalDispatch({type: "modal/setClose"})
  };
  const modalState = useSelector((state) => state.modalOpen);


  const pictures = [product1, product2, product3, product4];
  const picThumbs = [thumb1, thumb2, thumb3, thumb4];
  let currentPicture = pictures[Math.abs(itemNumber) % pictures.length];

  return (
    <div className={cn(style.background, {[style.background_visible]: modalState})}>
      <div className={style.layout} ref={ref}>
        <div className={style.currentPicWrapper}>
          <img src={currentPicture} className={style.currentPic} />
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
                  [style.thumbPic_active]:
                    Math.abs(itemNumber) % picThumbs.length === number,
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
    </div>
  );
};

export default GalleryModal;
