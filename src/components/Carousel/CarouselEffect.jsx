import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItem, index) => {
          return <img src={imageItem} key={index} alt="Image" />;
        })}
      </Carousel>
      <div className={style.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;
