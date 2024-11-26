import LayOut from "../../components/LayOut/LayOut";
import Product from "../../components/Product/Product";
import Carousel from "../../components/Carousel/CarouselEffect";
import Category from "../../components/Category/Category";

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
