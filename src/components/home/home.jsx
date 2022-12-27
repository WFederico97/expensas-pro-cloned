import React from "react";
import './home.css';
import CardHeroe from "../cards/cardExpensas";
import { Button } from "reactstrap";
import FormularioContacto from "../contactForm/contactForm";

export default function Home () {
  
    return(
        <div>
            <section id="section1" className="sectionHome1 d-flex col-12 justify-content-center" >
          <div className="col-6">
            <img src="./images/ilust_2 (1).svg" alt="ilust 2" />
            <div className="d-flex col stats justify-content-center">
              <div className="col-3 text-start">
                <span className="animated-counter fw-bold ">+1580</span>
                <br />
                <p className="statsText"> Consorcios/Barrios lo utilizan en toda Argentina.</p>
              </div>
              <div className="col-3 text-start">
                <span className="animated-counter fw-bold ">100%</span>
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
        <section id="section3" className="sectionHome3 d-flex col-12 justify-content-center ">
          <CardHeroe />
        </section>
        <section id="section4" className="sectionHome4 d-flex col-12 justify-content-center flex-wrap ">
          <div className="col-12 p-3">
            <h2 className="title">¿Quienes Somos?</h2>
          </div>
          <br />
          <div className="col-6">
            <p>Comenzamos con Expensas Online en el 2012 con el objetivo de modernizar los flujos de trabajo de las administraciones y mejorar la comunicación de éstas con los vecinos, a través de soluciones tecnológicas y digitales</p>
            <br />
            <p>Trabajamos con reconocidas administraciones de todo el país que usan y recomiendan nuestro servicio. Crecimos, y seguimos con la ambición de mejorar la experiencia en las comunidades de edificios y barrios privados.</p>
          </div>
          <div>
            <img src="./images/eol-timeline.png" alt="eol timeline" className="imgSection3 img-fluid" />
          </div>
        </section>
        <section id="sectionContacto" className="sectionContacto d-flex col-12 justify-content-center flex-wrap">
          <FormularioContacto />
        </section>
        </div>
    )
}