import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import NavBar from "../navbar/navbar";
import "./qa.css";

export default function Preguntas() {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
      <NavBar />
      <div
        id="qaSection"
        className="justify-content-center d-flex col-12 flex-wrap"
      >
        <div className="qaHeader col-12">
          <h1 className="fw-bold">FAQs</h1>
          <p>
            Consulta nuestra lista de preguntas frecuentes y encontrá la
            respuesta que necesitas.
          </p>
        </div>
        <div className="qaAccordion col-6">
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">
                ¿Como empiezo a usar Expensas Online?
              </AccordionHeader>
              <AccordionBody accordionId="1">
                Deja tus datos en cualquiera de nuestros formularios de contacto
                o chat interactivo de ayuda y nuestro departamento Comercial se
                contactará a la brevedad.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                ¿Qué necesito para usar los Medios de Pago?
              </AccordionHeader>
              <AccordionBody accordionId="2">
                Solo una cuenta bancaria, no necesitas ninguna gestión de
                integración administrativa y no tiene ningún costo de
                adquisición, los mismos ya están integrados en nuestro sistema.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                ¿Cómo funciona el servicio de Cobranza?
              </AccordionHeader>
              <AccordionBody accordionId="3">
                Al tener integrados los medios de pago en nuestra plataforma,
                nuestro servicio de recaudación simplemente recibe la
                información de los pagos realizados por los vecinos. El sistema
                procesa esa información, realiza la conciliación automática de
                los pagos para la unidad correspondiente y deposita de forma
                directa el dinero en la cuenta designada del consorcio o
                administración.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                ¿Cómo es la protección de los datos en el sistema si decidiera
                usarlo?
              </AccordionHeader>
              <AccordionBody accordionId="4">
                Nos encargamos de asegurar todos los datos de nuestra
                plataforma, integrando todo el sistema con los servicios en la
                nube de AMAZON.INC – USA, proporcionando servidores 100 %
                estables, backups de datos diarios y protocolos de seguridad que
                garantizan confidencialidad, integridad y disponibilidad de
                información constante. Además al dar de alta el consorcio/barrio
                en el sistema, los accesos que brindamos son personalizados solo
                para la administración correspondiente.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                ¿Existe un límite de carga de consorcios o unidades para
                administrar usando el sistema?
              </AccordionHeader>
              <AccordionBody accordionId="5">
                ¡El límite lo pones VOS! Expensas Online está diseñado para que
                puedas hacer escalable tu crecimiento, por lo que la carga de
                consorcios y unidades no tiene límite.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="6">
                ¿Para APRENDER las herramientas del sistema, tienen algún tipo
                de AYUDA?
              </AccordionHeader>
              <AccordionBody accordionId="6">
                ¡Así es! Contamos con atención al cliente de Lunes a Viernes de
                9 a 18 hs y Tutoriales de cada módulo de actividad. Si contas
                con 45 min. libres podemos coordinar una DEMO online para que
                veas en detalle el programa, sus herramientas y usos. ¡Deja tus
                datos en cualquiera de nuestros formularios de contacto y te
                llamamos!
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-10 d-flex justify-content-center qa-card-container ">
          <div className="qa-box-grand-father col-12 ">
            <div className="qa-box-father">
              <div className="qa-box-child col-12 text-start ">
                <h2 className="title-qa text-light fw-bold">
                  Automatiza tu gestión y crecé con Expensas Online
                </h2>
                <br />
                <p className="subtitle text-light">
                  Logramos vecinos felices y administraciones más rentables
                </p>
                <a href="/#sectionContacto" className="btn button-qa fw-bold">
                  ¡Empezá ya!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
