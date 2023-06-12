import React from "react";
import Carousel from "../Carousel/Carousel";
import ShopCard from "../ShopCard/ShopCard";
import About from "../About/About";
import "./Home.css";
import SearchHome from "../Search/SearchHome";

const Home = () => {
  return (
    <div>
      <Carousel />
      <ShopCard />
      <SearchHome />
      <About />
    </div>
  );
};

export default Home;
