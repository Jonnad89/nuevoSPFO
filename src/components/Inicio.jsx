import React from "react";
import "./Inicio.css";
import blur from '../assets/blur.png'
import dados from '../assets/dados.png'
import edificio from '../assets/edificio.jpg'
import reunion from '../assets/reunion.png'
import energy from '../assets/energy.png'
import Carousel from "./Carousel";

const Inicio = () => {
  return (
    <div>
      <Carousel />
      <div  className="img-energy">
      <img src={energy} alt=""/>
      </div>
    </div>
  );
};

export default Inicio;
