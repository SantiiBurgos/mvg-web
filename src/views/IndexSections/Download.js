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
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function Download() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              Sponsors
            </h2>
           
          </Col>

        </Row>

        <Row className="row-grid align-items-center">
          <Col className=" btn-wrapper text-center my-1" >
            <Button
              className="btn-simple btn-round"
              color="github"
              id="twitter"
              size="lg"
              href="https://jetsmart.com/ar/es/"
              target="_blank"
            >
              <img
            src={require("assets/img/jetsmart-white.png")}
            style={{ width: "150px" }}
          />
            </Button>
            <UncontrolledTooltip delay={0} target="twitter">
              JetSmart
            </UncontrolledTooltip>

            <Button
              className="btn-simple btn-round"
              color="github"
              id="tooltip877922017"
              size="lg"
              target="_blank"
              href="https://hmsportline.com/"
            >
              <img
            src={require("assets/img/jetsmart-white (1) (4).png")}
            style={{ width: "150px" }}
          />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip877922017">
              HM Indumentaria
            </UncontrolledTooltip>
          </Col>


        </Row>

        
      </Container>

      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              Partners
            </h2>
           
          </Col>

        </Row>

        <Row className="row-grid align-items-center">
          <Col className=" btn-wrapper text-center my-1" >


            <Button
              className="btn-simple btn-round"
              color="github"
              id="betson"
              size="lg"
              target="_blank"
              href="https://pba.betsson.bet.ar/"
            >
              <img
            src={require("assets/img/betsson.webp")}
            style={{ width: "150px" }}
          />
            </Button>
            <UncontrolledTooltip delay={0} target="betson ">
              Betsson
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
}
