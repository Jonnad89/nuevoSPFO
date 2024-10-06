import React from 'react';
import blur from "../assets/blur.png";
import dados from "../assets/dados.png";
import edificio from "../assets/edificio.jpg";
import reunion from "../assets/reunion.png"
const Carousel = () => {
    return (
        <div className="car-admi">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <p className="carousel-text">Alianza de calidad, seguridad y éxito</p>
            <div class="carousel-item active">
              <img src={blur} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={dados} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={edificio} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={reunion} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
};

export default Carousel;