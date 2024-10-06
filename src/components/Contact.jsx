import React from "react";
import blur from "../assets/blur.png";
import dados from "../assets/dados.png";
import edificio from "../assets/edificio.jpg";
import reunion from "../assets/reunion.png";
import './Contact.css'
const Contact = () => {
  return (
    <div className="car-con">
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
      {/* FORM */}
      <div class="container">
  <div class="row">
    {/* <!-- Columna para el texto de contacto --> */}
    <div class="col-md-6 contact-info">
      <h3>CONTACTA CON <span>NOSOTROS</span></h3>
      <p><strong>MADRID</strong></p>
      <p>Paseo de la Castellana 259C Planta 18</p>
      <p>Torre de Cristal, Madrid - España 28046</p>
      <p>Email: info@spfo.es</p>
      <p>Tel: +34 91 451 10 45</p>
      <p>Fax: +34 91 119 05 01</p>
      <br/>
      <p><strong>SEVILLA</strong></p>
      <p>Calle Mairena 61 1 - A-B</p>
      <p>Alcalá De Guadaira, Sevilla - España 41500</p>
    </div>
    
    {/* <!-- Columna para el formulario --> */}
    <div class="col-md-6 form-container">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="btn-enviar">
      <button class="btn btn-primary" type="submit">Enviar</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Contact;