import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import './navbar.css'

export default function NavBar() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar expand={'lg'}  dark full={'true'} container >
        <NavbarBrand href="/"><img src="./images/isologotipo_blanco.svg" alt="logotipo" className="img-fluid" /></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="d-flex col justify-content-end gap-3 align-items-center navBar"  navbar>
            <NavItem className="caracteristicas">
              <NavLink className="text-light fw-bold" href="/components/">Caracteristicas</NavLink>
            </NavItem>
            <NavItem className="about">
              <NavLink className="text-light fw-bold" href="/components/">Quienes Somos</NavLink>
            </NavItem>
            <NavItem className="qa">
              <NavLink className="text-light fw-bold" href="/components/">Preguntas</NavLink>
            </NavItem>
            <NavItem className="accesoVecinos btn  btn-outline-light">
              <NavLink className="text-light fw-bold" href="/components/">Acceso Vecinos</NavLink>
            </NavItem>
            <NavItem className="accesoAdm btn  btn-outline-light">
              <NavLink className="text-light fw-bold" href="https://github.com/reactstrap/reactstrap">
                Acceso Administrador
              </NavLink>
            </NavItem>
          </Nav> 
        </Collapse>
      </Navbar>
    </div>
  );
}
