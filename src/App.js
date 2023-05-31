import style from "./App.module.scss";
import Header from "./components/Header";
import PictureGallery from './components/PictureGallery';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <div className={style.container}>
      <Header></Header>
      <div className={style.grid}>
        <PictureGallery></PictureGallery>
        <ProductInfo></ProductInfo>
      </div>
    </div>
  );
}

export default App;
