import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HeaderComponent from "./coponents/header/Header";
import { Route, Routes } from "react-router-dom";
import Hero from "./coponents/hero/Hero";
import Advertise from "./coponents/Advertise/Advertise";
import Products from "./coponents/Products/Products";
import Footer from "./coponents/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HeaderComponent />
      <Hero />
      <Advertise />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
