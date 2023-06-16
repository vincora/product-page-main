import { useState } from "react";
import iconPrevious from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";
import style from "./PictureGallery.module.scss";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { useMedia } from "react-use";
import { product } from "../ItemInfo.js";

const PictureGallery = () => {
  const [itemNumber, setItemNumber] = useState(0);

  const pictures = product.images;
  const picThumbs = product.thumbnails;
  let currentPicture = pictures[itemNumber % pictures.length];

  const isWide = useMedia("(min-width:750px)");

  const modalDispatch = useDispatch();
  const openModal = () => {
    if (isWide) {
      modalDispatch({ type: "modal/setOpen" });
    }
  };

  return (
    <div className={style.layout}>
      <div className={style.currentPicWrapper}>
        <img
          src={currentPicture}
          className={style.currentPic}
          onClick={openModal}
        />
        <div
          className={cn(style.arrow, style.arrowPrevious)}
          onClick={() => {
            setItemNumber((current) =>
              current > 0 ? current - 1 : pictures.length - 1
            );
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
  );
};

export default PictureGallery;
