import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React from "react";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";

const items = [
  <div>
    <img src={bg1} alt="" />
  </div>,
  <div>
    <img src={bg2} alt="" />
  </div>,
  <div>
    <img src={bg3} alt="" />
  </div>,
];

const Carousel = () => (
  <AliceCarousel mouseTracking items={items} controlsStrategy="alternate" />
);
export default Carousel;
