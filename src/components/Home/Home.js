import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import ShopCard from "../ShopCard/ShopCard";
import About from "../About/About";
import "./Home.css";
import SearchHome from "../Search/SearchHome";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import store from "../../Redux/reduxStore";
import { addShop } from "../../Redux/Slices/AllShops";

const Home = () => {
  const [getShops, setGetShops] = useState([]);
  const getShopData = async () => {
    const data = await getDocs(collection(db, "ProfessionalDB"));
    const newData = data.docs.map((res) => ({
      ...res.data(),
      id: res.id,
    }));

    setGetShops(newData);
    store.dispatch(addShop(newData));
  };
  useEffect(() => {
    getShopData();
  }, []);

  return (
    <div>
      <Carousel />
      <ShopCard data={getShops} />
      <SearchHome />
      <About />
    </div>
  );
};

export default Home;
