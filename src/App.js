import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ShopDetail from "./components/Pages/ShopDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookShop from "./components/Pages/BookShop";
import User from "./components/Pages/User";
import Help from "./components/Pages/Help";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopDetail />} />
        <Route path="/book" element={<BookShop />} />
        <Route path="/user" element={<User />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
