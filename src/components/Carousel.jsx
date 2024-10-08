//import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import video1 from "../assets/barco.mp4";
const Carousel = () => {
  return (
    <div className="car-admi">
      <div
        id="carouselExampleFade"
        className="carouselSlide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <p className="carousel-text">ENERGY FOR YOUR LIFE</p>
          <div className="img-w">
            <div className="carousel-item">
              <img src={img1} className="fotoCarrusel" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="fotoCarrusel" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="fotoCarrusel" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img4} className="fotoCarrusel" alt="..." />
            </div>
            <div className="carousel-item">
              <video src={video1} autoPlay></video>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
