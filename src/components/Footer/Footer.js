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
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
          <img
                src={require("assets/img/v (5).png")}
                style={{ width: "150px" }}
              />
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Inicio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/equipos" tag={Link}>
                  Equipos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/sobrenosotros" tag={Link}>
                  Sobre Nosotros
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="https://listado.mercadolibre.com.ar/_CustId_246855103?item_id=MLA1116058159&category_id=MLA7093&seller_id=246855103&client=recoview-selleritems&recos_listing=true"
>
                  Tienda
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://drive.google.com/file/d/11qF87k8MDN3ppagI8JHqt1Qh6ac99mR3/view?usp=drive_link">
                  Manual de marca
                </NavLink>
              </NavItem>
              
            </Nav>
          </Col>
          <Col md="3">
            
            <div className="btn-wrapper profile">
            <h3 className="title">Seguinos</h3>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/malvinas_gaming"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                @malvinas_gaming
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.facebook.com/MalvinasGamingEsports"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                /MalvinasGamingEsports
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.instagram.com/malvinas_gaming/"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                @malvinas_gaming
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
