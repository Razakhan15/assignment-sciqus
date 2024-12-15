import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";
import TextAnimation from "./components/TextAnimation";
import AnimatedCarousel from "./components/AnimatedCarousel";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex">
        <Sidebar />
        <div>
          <TextAnimation/>
          <Carousel />
          <Cards />
          <Carousel />
          <Buttons />
          <AnimatedCarousel/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
