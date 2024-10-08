//import React from "react";
import "./Inicio.css";
import mujer from "../assets/mujer.webp";
import img2 from "../assets/img2.jpg";
import Carousel from "./Carousel";

const Inicio = () => {
  return (
    <div>
      <Carousel />
      <div className="img-energy">
        <div className="mujer">
          <img src={mujer} alt="" />
        </div>

        <div className="textoPortada">
          <p className="">
            • Somos una plataforma de trading físico española especialista en el
            suministro, asesoramiento e inversión en el sector energético;
            formada por un grupo de socios y un equipo operativo con amplia
            experiencia en el mercado de combustibles, productos derivados del
            petróleo, y energías renovables. <br />
            • Desde nuestro establecimiento en 2015, SPFO se especializa en la
            importación, exportación, logística, consultoría e inversiones
            centradas en el mercado de los combustibles de ámbito nacional e
            internacional, principalmente en la compra y venta de Productos
            destilados intermedios, Petróleo Crudo y Mazut-100. <br />
            • Proporcionamos soluciones de comercio en todo el mundo con una
            amplia gama de productos, combinando áreas como la gestión de
            proyectos, suministro de materiales y logística. <br />• Trabajamos
            con nuestros proveedores y clientes estructurando operaciones
            financieras seguras y rentables, y operaciones de comercio sólidas
            para alcanzar resultados satisfactorios aportando un valor añadido
            que marca la diferencia.
          </p>
          <br />
          <button>Saber más</button>
        </div>

        <div className="textoPortada2">
          <p className="">
            • SPFO posee una cartera de conexiónes que le asocia directamente a
            Terminales e instalaciones de tanques de almacenamiento en Europa,
            Asia y América. Para todos los productos derivados del petróleo que
            se comercializa, a través de operadores de almacenamiento aprobados
            en tierra y mar adentro. Esto es principalmente para el
            almacenamiento de combustible y productos derivados del petróleo
            tanto en nuestras operaciones como para clientesque demandan
            servicios logísticos. <br />
            • Operamos en conjunto con empresas de servicios marítimos
            multifuncionales, con un enfoque en los mercados mundiales de
            fletamento de buques petroleros y alquiler de tanques de
            almacenamiento. <br />
            • En un mundo en constante cambio, nuestro equipo calificado y
            experimentado sigue las tendencias y los patrones cambiantes en
            logística. Trabajamos en estrecha colaboración con nuestros
            clientes, ayudándoles a crear las mejores soluciones comerciales y
            operativas posibles. <br />
          </p>
          <br />
          <button>Terminales</button>
        </div>
      </div>

      <div>
        <div className="img2">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
