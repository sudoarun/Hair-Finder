import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Loginpage from "./components/Loginpage/Loginpage";

function App() {
  return (
    <>
      <Loginpage />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
