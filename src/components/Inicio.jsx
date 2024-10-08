//import React from "react";
import "./Inicio.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
//import img5 from "../assets/img5.png";
import Carousel from "./Carousel";

const Inicio = () => {
  return (
    <div>
      <Carousel />
      <div className="img-energy">
        <div className="img2">
          <img src={img2} alt="" />
        </div>
        <div className="img1">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
