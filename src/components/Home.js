import React from "react";
import Products from "./Products";
import images from "./Carousel/images";
import ImageSlider from "./Carousel/ImageSlider";

function Home() {
  return (
    <div className="hero">
      <ImageSlider images={images} />
      <Products />
    </div>
  );
}

export default Home;
