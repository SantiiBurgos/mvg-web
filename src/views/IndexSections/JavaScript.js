import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel
} from "reactstrap";



const carouselItems = [
  {
    src: require("assets/img/LOL.jpg")
  },
  {
    src: require("assets/img/MLBB.jpg")
  },
  {
    src: require("assets/img/R6.jpg")
  },
  {
    src: require("assets/img/FREEFIRE.jpg")
  }

];

export default function JavaScript() {
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img alt="..." className="path" src={require("assets/img/path5.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />

      <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png")}
          />
      <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/TIENDA11.jpg")}
                />
                
              </Col>
              
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-primary" />
                  <Button
                color="primary"
                href="https://listado.mercadolibre.com.ar/_CustId_246855103?item_id=MLA1116058159&category_id=MLA7093&seller_id=246855103&client=recoview-selleritems&recos_listing=true"
                target="_blank"
              >
                Tienda
              </Button>
                  <p>
                  Descubre nuestra amplia selección de productos de alta calidad a precios competitivos.
                  Desde moda hasta electrónica, tenemos todo lo que necesitas para tu estilo de vida.
                  Nuestro equipo está siempre listo para ayudarte con cualquier pregunta que puedas tener.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-primary mb-2">
                          <i className="tim-icons icon-tag" />
                        </div>
                        
                        <div className="ml-3">
                          <h6>La mejor calidad.</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-primary mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Comprá fácil y rápido.</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-primary mb-2">
                          <i className="tim-icons icon-square-pin" />
                        </div>
                        <div className="ml-3">
                          <h6>Envíos a todo el país.</h6>
                        </div>                        
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      <div className="section">
        <Container>
          <div className="title">
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h2 className="text-white font-weight-light">
                Nuestros soldados
              </h2>
              <p className="text-white mt-4">
              En esta sección, exploraremos los distintos roles y perfiles de los jugadores que componen un equipo de esports,
               desde los líderes hasta los apoyos, y analizaremos cómo trabajan juntos para lograr los objetivos del equipo en
                los torneos y ligas más importantes del mundo de los videojuegos.</p>
              <Button
                className="mt-4"
                color="primary"
                href="/equipos"
              >
                Equipos
              </Button>
            </Col>
            <Col lg="5">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={true}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
