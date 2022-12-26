import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./contactForm.css";

export default function FormularioContacto() {
  return (
    <div className="contactForm ">
        <h4>Dejanos tus datos para mas información</h4>
      <Form className="text-start fw-bold">
        <FormGroup>
          <Label for="nombreCompleto">Nombre Completo*</Label>
          <Input id="nombreCompleto" name="nombre" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            id="Email"
            name="email"
            placeholder="Escribe tu email"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="telefono">Teléfono*</Label>
          <Input id="telefono" name="telefono" type="number" />
        </FormGroup>
        <FormGroup>
          <Label for="barrios">N° de Edificios/Barrios*</Label>
          <Input id="barrios" name="barrios" type="number" />
        </FormGroup>
        <FormGroup>
          <Label for="consulta">Consulta</Label>
          <Input id="consulta" name="consulta" type="textarea" />
        </FormGroup>
        <Button block className="botonForm">Enviar</Button>
      </Form>
    </div>
  );
}
