import React from "react";

export default function GreetingHeroe() {
  return (
    <div class="container col-xxl-12 ">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-6 col-sm-8 col-lg-6">
          <img
            src="./images/hero_image1.png"
            class="d-block mx-5 img-fluid"
            alt="Bootstrap Themes"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 text-start d-flex row justify-item-start">
          <h2 class=" fw-bold text-light">
          Administrá más, en menos tiempo
          </h2>
          <p class="lead text-light">
          Te damos la bienvenida a una nueva experiencia en gestión de consorcios. Sistema integral para la administración de edificios y barrios privados.
          </p>
          <div class="d-grid  d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Quiero que me contacten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
