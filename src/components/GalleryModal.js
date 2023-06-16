import style from "./GalleryModal.module.scss";
import { useState, useRef } from "react";
import { product } from "../ItemInfo";
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
    modalDispatch({ type: "modal/setClose" });
  };
  const modalState = useSelector((state) => state.modalOpen);

  const pictures = product.images;
  const picThumbs = product.thumbnails;
  let currentPicture = pictures[itemNumber % pictures.length];

  return (
    <div
      className={cn(style.background, {
        [style.background_visible]: modalState,
      })}
    >
      <div className={style.layout} ref={ref}>
        <div className={style.iconClose} onClick={closeModal}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#fff" fillRule="evenodd"/></svg>
        </div>
        <div className={style.currentPicWrapper}>
          <div className={cn(style.arrow, style.arrowPrevious)}
            onClick={() => {
              setItemNumber((current) =>
                current > 0 ? current - 1 : pictures.length - 1
              );
            }}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg>
          </div>
          <img src={currentPicture} className={style.currentPic} />
          <div
            className={cn(style.arrow, style.arrowNext)}
            onClick={() => {
              setItemNumber((current) => current + 1);
            }}
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg>
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
