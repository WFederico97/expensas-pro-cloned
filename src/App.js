import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login/login';
import NavBar from "./components/navbar/navbar";
import GreetingHeroe from "./components/heroe-greeting/heroe-greeting";
import { Button } from "reactstrap";




function App() {

  return (
    <div className="App ">
      <header className="header container-fluid">
        <NavBar />
        <GreetingHeroe />
      </header>
      <section id="section1" className="sectionHome1 d-flex col-12 justify-content-center" >
        <div className="col-6">
          <img src="./images/ilust_2 (1).svg" alt="ilust 2" />
          <div className="d-flex col stats justify-content-center">
            <div className="col-3 text-start">
              <span className="animated-counter">+1580</span>
              <br />
              <p className="statsText"> Consorcios/Barrios lo utilizan en toda Argentina.</p>
            </div>
            <div className="col-3 text-start">
              <span className="animated-counter">100%</span>
              <br />
              <p className="statsText">  de nuestros usuarios nos recomienda.</p>
            </div>
          </div>
        </div>
        <div className="col-6 my-auto text-start">
          <h2 className="title ">La herramienta que necesitas para optimizar y
            automatizar tu gestión
          </h2>
          <br />
          <p className="subtitle ">Es una plataforma de gestión para la administración de edificios y barrios privados, diseñado para centralizar la información, economizar tiempo y facilitar la comunicación con los vecinos.</p>
          <br />
          <p className="subtitle">
            Brinda la posibilidad de optimizar y automatizar aquellas tareas extensas y repetitivas del trabajo diario, permitiéndote aprovechar mejor tus recursos, y así poder hacer crecer tu administración.
          </p>
        </div>
      </section>

      <section id="section2" className="sectionHome2 d-flex col-12 justify-content-center">
        <div className="col-4 text-start p-4">
          <h2 className="title">
            Expensas accesibles con medios de pago
            integrados
          </h2>
          <br />
          <p className="subtitle">
            Incorporamos medios de pago integrados para facilitarle la tarea a la administración (le permite la conciliación automática) y brindarle comodidad a los vecinos dándole diversas maneras para efectuar el pago.
          </p>
          <ul className="list">
            <li>Conciliación automática</li>
            <li>Reducir la morosidad</li>
            <li>Reducir la morosidad</li>
          </ul>
          <img src="./images/medios_de_pago_big.webp" alt="medios de pago" className="img-fluid mediosDePago" />
        </div>
        <div className="col-5 ">
          <img src="./images/ilust_3.svg" alt="ilustracion 3" className="img-fluid ilustracion3" />
          <Button outline-light className="botonContacto1">Quiero que me contacten </Button>
        </div>
      </section>
      <section id="section3" className="sectionHome3 d-flex col-12 justify-content-center">

      </section>
      <Routes>
        <Route path="/login" element={<LoginPage />} >
        </Route>
      </Routes>


    </div>
  );
}

export default App;
