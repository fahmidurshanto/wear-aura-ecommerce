import React from "react";
import Slider from "react-slick";
import image_1 from "../../assets/jersey/wear-aura-logo.jpg";
import image_2 from "../../assets/jersey/jersey.jpg";
import image_3 from "../../assets/jersey/jersey2.jpg";
import image_4 from "../../assets/jersey/jersey3.jpg";
import image_5 from "../../assets/jersey/jersey4.jpg";

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
        <div>
          <img className="w-full h-96 border-2" src={image_5} />
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
