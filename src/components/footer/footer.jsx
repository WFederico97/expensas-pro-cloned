import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer col-12 d-flex flex-wrap">
      <div className="col-12 justify-items-center">
        <img
          src="./images/isologotipo_blanco.svg"
          alt="isologotipo"
          className="footerImg img-fluid"
        />
      </div>
      <br />
      <div className="d-flex col-12  text-light justify-content-between text-center footerLinks ">
        <a href="/"  className="footerLink col-4">Términos de Uso</a>
        <p className="footerLink col-4">2022 © Expensas Online S.A. Todos los derechos
					reservados.</p>
        <a href="/" className="footerLink col-4">Política de Privacidad</a>
      </div>
      <br/>
      <div className="d-flex col col-12 text-light text-center justify-content-between footerLinks">
        <p className="col-12 footerLink">Atención al público:	soporte@zenrise.io - Teléfono o whatsapp a los números 3517889116 / 3517895508</p>
      </div>
      <br/>
      <div className="d-flex col col-12 text-light text-center justify-content-between footerLinks">
        <p className="disclaimer col-12">Coded with <span>&#10084;</span> by <a className="linkedinProfile" target={'_blank'} rel='noreferrer'  href="https://www.linkedin.com/in/federico-wuthrich-668633164/">FEDev </a>
            este sitio web NO DEBE SER UTILIZADO CON FINES COMERCIALES, SOLO CON FINES ACADÉMICOS
         </p>
      </div>
    </div>
  );
}
