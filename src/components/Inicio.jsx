//import React from "react";
import "./Inicio.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import Carousel from "./Carousel";

const Inicio = () => {
  return (
    <div>
      <Carousel />
      <div className="img-energy">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>
    </div>
  );
};

export default Inicio;
