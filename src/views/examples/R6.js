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
import classnames from "classnames";
import './styles.css';
import './style.css';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function R6() {
  const redirectTo = (url) => {
    window.open(url, '_blank');
  };
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            
          <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />


      <img src={require("assets/img/r6LogoFull.webp")}
          width={200} />
      
      <div class="list">
        

      <div class="contenedor">
        <div class="perfil-contenedor2">
          <div class="perfil-wrapper effect-wrap">
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Argentina.svg.webp")} />

              <h2>kaefx</h2>
              <h4>Lautaro Sanchez</h4>

              <div class="icons">
              <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/Kaefeer6')}></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedor3">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Argentina.svg.webp")} />

              <h2>Skarp</h2>
              <h4>Hernán Burrelo</h4>

              <div class="icons">
              <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/Skarp1007')}></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedor4">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Argentina.svg.webp")} />

              <h2>panno9</h2>
              <h4>Franco Panno</h4>

              <div class="icons">
              <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/pannoR6')}></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedor5">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Argentina.svg.webp")} />

              <h2>Ragn4r</h2>
              <h4>Ivan Dal Molin</h4>

              <div class="icons">
                <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/Ragn4r_R6')}></i> 
                
                <i class="bx bxl-instagram" onClick={() => redirectTo('https://www.instagram.com/ivandalmolin_/')}></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedor">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Argentina.svg.webp")} />

              <h2>NiTRX</h2>
              <h4>Emiliano Garay</h4>

              <div class="icons">
                <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/Nitro_R6')}></i>
              </div>
            </div>
        </div>
      </div>
      </div>


        

    </div>
           
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
