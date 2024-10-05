import React from "react";
import puente from '../assets/puente.jpg';
import './InicioParte2.css';

const InicioParte2 = () => {
  return (
    <div className="puente-container">
      <div className="puente-content">
        <h1>Bienvenido a SPFO, su compañía de confianza</h1>
        <p className="puente-text">
          La Plataforma de suministro e inversiones más segura del sector energético y financiero.
        </p>
        <p className="puente-text">
          Generamos soluciones de gran valor en el comercio integral.
        </p>
        <button>SOBRE SPFO</button>
      </div>
      <img src={puente} alt="Puente" className="puente-img" />
    </div>
  );
};

export default InicioParte2;
