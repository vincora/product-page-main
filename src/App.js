import style from "./App.module.scss";
import Header from "./components/Header";
import PictureGallery from "./components/PictureGallery";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Header/>
      <div className={style.gridWrapper}>
        <div className={style.grid}>
          <PictureGallery/>
          <Product/>
        </div>
      </div>
    </div>
  );
}

export default App;
