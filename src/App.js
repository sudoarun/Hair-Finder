import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import Loginpage from "./components/Loginpage/Loginpage";

import ShopDetail from "./components/Pages/ShopDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookShop from "./components/Pages/BookShop";
import User from "./components/Pages/User";
import Help from "./components/Pages/Help";
import BarberRegister from "./components/Pages/BarberRegister";
import Schedule from "./components/Pages/Schedule";
import SearchShop from "./components/Search/SearchShop";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function PrivateRoute({ isLoggedIn, children }) {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  }

  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopDetail />} />
        <Route
          path="/booking"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <BookShop />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <User setIsLoggedIn={setIsLoggedIn} />
            </PrivateRoute>
          }
        />
        <Route path="/professional-register" element={<BarberRegister />} />
        <Route path="/help" element={<Help />} />
        <Route
          path="/Login"
          element={<Loginpage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/search" element={<SearchShop />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </>
  );
}

export default App;
