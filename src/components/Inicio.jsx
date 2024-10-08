import React from "react";
import "./Inicio.css";
import blur from '../assets/blur.png'
import dados from '../assets/dados.png'
import edificio from '../assets/edificio.jpg'
import reunion from '../assets/reunion.png'
import energy from '../assets/energy.png'

const Inicio = () => {
  return (
    <div>
        <div className="car-ini">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
            <p className="carousel-text">Alianza de calidad, seguridad y éxito</p>
          <div className="carousel-item active">
            <img src={blur} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={dados} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={edificio} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={reunion} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>
      <div  className="img-energy">
      <img src={energy} alt=""/>
      </div>
    </div>
  );
};

export default Inicio;
