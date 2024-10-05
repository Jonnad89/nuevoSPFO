import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Esto incluye Popper.js
import logo from '../assets/LOGO.png'
const Navbar = () => {
  return (
    <>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container py-2">
                    <Link className="navbar-brand" to="/inicio">
                    <img src={logo} alt="" className="logo-nav" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* means */}
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                           
                            <li className="nav-item">
                                <Link className="nav-link" to="/inicio">Inicio</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sobre SPFO
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Visión Y Desarrollo</a></li>
                                    <li><a className="dropdown-item" href="/">Así Operamos</a></li>
                                    <li><a className="dropdown-item" href="/">Requerimientos</a></li>
                                    <li><a className="dropdown-item" href="/">Debida Diligencia</a></li>
                                    <li><a className="dropdown-item" href="/">Productos SPFO</a></li>
                                    <li><a className="dropdown-item" href="/">Logística</a></li>
                                    <li><a className="dropdown-item" href="/">Gestores De Capital</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/administracion">Administración</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li> */}
                           
                            {/* <div className="mx-3">
                                <button type="button" className="btn1 mx-2">Login</button>
                                <button type="button" className="btn2 mx-2">Sign Up</button>
                            </div> */}
                            {/* <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                            </div> */}
                        </ul>
                    </div>
                    {/* end */}
                </div>
            </nav>
    </>
  );
};

export default Navbar;
