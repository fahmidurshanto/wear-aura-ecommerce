import React from "react";
import Slider from "react-slick";
import image_1 from "../../assets/category-1.jpg";
import image_2 from "../../assets/category-2.jpg";
import image_3 from "../../assets/category-3.jpg";
import image_4 from "../../assets/category-4.jpg";

function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className="slider-container max-w-[90%]  mx-auto overflow-hidden">
      <Slider {...settings}>
        <div>
          <img className="w-full h-96 border-2" src={image_1} />
        </div>
        <div>
          <img className="w-full h-96 border-2" src={image_2} />
        </div>
        <div>
          <img className="w-full h-96 border-2" src={image_3} />
        </div>
        <div>
          <img className="w-full h-96 border-2" src={image_4} />
        </div>
      </Slider>
    </div>
  );
}

export default Fade;