/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h1>LOGROS</h1>
    <br></br><hr className="line-primary" style={{ width: '5%', margin: '0 auto' }}/><br></br><br></br>
            <h4 className="description">
            Desde 2013, nuestro equipo de esports ha estado compitiendo a nivel profesional y ha logrado numerosos éxitos en su carrera. Hemos ganado múltiples campeonatos y hemos sido reconocidos como uno de los equipos más destacados de la escena de los deportes electrónicos. Nuestro compromiso con la excelencia y la dedicación a nuestro deporte nos ha llevado a la cima del mundo de los esports. 
            </h4>
          </Col>
        </Row>
        <div className="blur-hover">
          <a href="/sobrenosotros">
            <div className=" blur-item on-screen mt-5">
            <img className="fotitoBlur"
              src={require("assets/img/2022web.webp")}
            />
            </div>
            <span className="blur-hidden h5 text-primary">
              Explorá nuestros logros
            </span>
          </a>
        </div>
      </Container>
    </div>
  );
}
