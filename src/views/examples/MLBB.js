
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

export default function MLBB() {
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
      <br></br><br></br>
      <h1>MOBILE LEGENDS</h1>
      <br></br><hr className="line-primary" style={{ width: '5%', margin: '0 auto' }}/>
            
          <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />


  
      
      <div class="list2">
        
      <div class="contenedor">
        <div class="perfil-contenedorM1">
          <div class="perfil-wrapper effect-wrap">
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Brazil.svg.webp")} />

              <h2>teex</h2>
              <h4>-</h4>

              <div class="icons">
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-instagram"></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedorM2">
          <div class="perfil-wrapper effect-wrap">
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Brazil.svg.webp")} />

              <h2>vitu</h2>
              <h4>-</h4>

              <div class="icons">
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-instagram"></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      

      <div class="contenedor">
        <div class="perfil-contenedorM4">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Brazil.svg.webp")} />

              <h2>shuun</h2>
              <h4>-</h4>

              <div class="icons">
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-instagram"></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      </div>
      <div class="list2">

      <div class="contenedor">
        <div class="perfil-contenedorM5">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Brazil.svg.webp")} />

              <h2>luizinho</h2>
              <h4>-</h4>

              <div class="icons">
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-instagram"></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedorM6">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Brazil.svg.webp")} />

              <h2>guiimap</h2>
              <h4>-</h4>

              <div class="icons">
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-instagram"></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedorM7">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Brazil.svg.webp")} />

              <h2>estarosa</h2>
              <h4>-</h4>

              <div class="icons">
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-instagram"></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      


        


       
      </div>
      <Footer />
    </>
  );
}
