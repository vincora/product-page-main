import style from "./App.module.scss";
import GalleryModal from "./components/GalleryModal";
import Header from "./components/Header";
import PictureGallery from "./components/PictureGallery";
import Product from "./components/Product";

function App() {
  return (
    <div className={style.layout}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.gridWrapper}>
        <div className={style.grid}>
          <div className={style.gallery}>
            <PictureGallery />
          </div>
          <div className={style.product}>
            <Product />
          </div>
        </div>
      </div>
      <GalleryModal />
    </div>
  );
}

export default App;
