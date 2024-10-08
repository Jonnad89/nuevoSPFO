//import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
//import img5 from "../assets/img1.jpg";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="car-con">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <p className="carousel-text">Alianza de calidad, seguridad y éxito</p>
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
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
      {/* FORM */}
      <div className="container">
        <div className="row">
          {/* <!-- Columna para el texto de contacto --> */}
          <div className="col-md-6 contact-info">
            <h3>
              CONTACTA CON <span>NOSOTROS</span>
            </h3>
            <p>
              <strong>MADRID</strong>
            </p>
            <p>Paseo de la Castellana 259C Planta 18</p>
            <p>Torre de Cristal, Madrid - España 28046</p>
            <p>Email: info@spfo.es</p>
            <p>Tel: +34 91 451 10 45</p>
            <p>Fax: +34 91 119 05 01</p>
            <br />
            <p>
              <strong>SEVILLA</strong>
            </p>
            <p>Calle Mairena 61 1 - A-B</p>
            <p>Alcalá De Guadaira, Sevilla - España 41500</p>
          </div>

          {/* <!-- Columna para el formulario --> */}
          <div className="col-md-6 form-container">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="btn-enviar">
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
