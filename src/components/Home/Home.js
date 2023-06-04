import React from "react";
import Carousel from "../Carousel/Carousel";
import ShopCard from "../ShopCard/ShopCard";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div>
        <ShopCard />
      </div>
      <About />
    </div>
  );
};

export default Home;
