import "./App.scss";
import Header from "./components/Header";
import PictureGallery from './components/PictureGallery';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <div>
      <Header></Header>
      <PictureGallery></PictureGallery>
      <ProductInfo></ProductInfo>
    </div>
  );
}

export default App;
