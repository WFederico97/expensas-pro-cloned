import React from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardLink,
} from "reactstrap";
import "./cardExpensas.css";

export default function CardHeroe() {
  return (
    <div className="col-12 d-flex flex-wrap ">
      <CardGroup className="col-12 d-flex col">
        <Card className="cardHeroe">
          <CardImg
            alt="Card image cap"
            src="./images/expensas.svg"
            top
            className="img-fluid cardImgHeroe"
          />
          <CardBody>
            <CardTitle tag="h5">Modelo de Expensas</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Modelos personalizables para tu administración. Modelo Mis
              Expensas CABA
            </CardSubtitle>
            <CardLink href="#"><Button className="botonVerMas">Ver más</Button></CardLink>
          </CardBody>
        </Card>
        <Card className="cardHeroe">
          <CardImg
            alt="Card image cap"
            src="./images/liquidacion.svg"
            top
            className="img-fluid cardImgHeroe"
          />
          <CardBody>
            <CardTitle tag="h5">Liquidación en 3 pasos</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Cargas gastos, consolidás y enviás.
            </CardSubtitle>
            <CardLink href="#"><Button className="botonVerMas">Ver más</Button></CardLink>
          </CardBody>
        </Card>
        <Card className="cardHeroe">
          <CardImg
            alt="Card image cap"
            src="./images/cobranzas.svg"
            top
            className="img-fluid cardImgHeroe"
          />
          <CardBody>
            <CardTitle tag="h5">Automatización de Cobranzas</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Conciliación, registro y control del pago de expensas.
            </CardSubtitle>
            <CardLink href="#"><Button className="botonVerMas">Ver más</Button></CardLink>
          </CardBody>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className="cardHeroe">
          <CardImg
            alt="Card Image Cap"
            src="./images/calendar.svg"
            top
            className="img-fluid cardImgHeroe"
          />
          <CardBody>
            <CardTitle tag="h5">Gestion de Morosos</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Convenios de pago, reportes, informes, estados de cuenta.
            </CardSubtitle>
            <CardLink href="#"><Button className="botonVerMas">Ver más</Button></CardLink>
          </CardBody>
        </Card>
        <Card className="cardHeroe">
          <CardImg
            alt="Card Image Cap"
            src="./images/proveedores.svg"
            top
            className="img-fluid cardImgHeroe"
          />
          <CardBody>
            <CardTitle tag="h5">Gestion de proveedores</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Alta de proveedores, facturas, ordenes de pago.
            </CardSubtitle>
            <CardLink href="#"><Button className="botonVerMas">Ver más</Button></CardLink>
          </CardBody>
        </Card>
        <Card className="cardHeroe">
          <CardImg
            alt="Card Image Cap"
            src="./images/envio.svg"
            top
            className="img-fluid cardImgHeroe"
          />
          <CardBody>
            <CardTitle tag="h5">Gestion de Envío de Expensas</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Envíos automatizados y control de envíos.
            </CardSubtitle>
            <CardLink href="#"><Button className="botonVerMas">Ver más</Button></CardLink>
          </CardBody>
        </Card>
        <Card className="cardHeroe">
          <CardImg
            alt="Card Image Cap"
            src="./images/appvecinos.svg"
            top
            className="img-fluid cardImgHeroe"
          />
          <CardBody>
            <CardTitle tag="h5">Aplicación de Vecinos</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Acceso personalizado, pago de expensas, comunicados y más.
            </CardSubtitle>
            <CardLink href="#"><Button className="botonVerMas">Ver más</Button></CardLink>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
