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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function PrivateRoute({ isLoggedIn, children }) {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopDetail />} />
        <Route path="/book" element={<BookShop />} />
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
        <Route path="/Login" element={<Loginpage />} />
      </Routes>
    </>
  );
}

export default App;
