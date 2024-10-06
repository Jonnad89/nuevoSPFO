import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Esto incluye Popper.js
import logo from "../assets/LOGO.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container py-2">
          <Link className="navbar-brand" to="/inicio">
            <img src={logo} alt="" className="logo-nav" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto nav_ul align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/inicio">
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sobre SPFO
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/vision-y-desarrollo">
                      Visión Y Desarrollo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/asi-operamos">
                      Así Operamos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/requerimientos">
                      Requerimientos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/diligencia">
                      Debida Diligencia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/productos">
                      Productos SPFO
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/logistica">
                      Logística
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/gestores">
                      Gestores De Capital
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/administracion">
                  Administración
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
