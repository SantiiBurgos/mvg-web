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

export default function LOL() {
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
      <br></br><br></br>
      <h1>LEAGUE OF LEGENDS</h1>
      <br></br><hr className="line-primary" style={{ width: '5%', margin: '0 auto' }}/>
            
          <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />

      
      <div class="list">
        

      <div class="contenedor">
        <div class="perfil-contenedorLol1">
          <div class="perfil-wrapper effect-wrap">
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Brazil.svg.webp")} />

              <h2>zKs</h2>
              <h4>César Augusto Berteli de França</h4>

              <div class="icons">
              <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/EoZecas')}></i>
              <i class="bx bxl-instagram" onClick={() => redirectTo('https://www.instagram.com/zecaslol/')}></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedorLol2">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Brazil.svg.webp")} />

              <h2>asta</h2>
              <h4>Wyllian Souza Adriano</h4>

              <div class="icons">
              <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/astalol2')}></i>
              <i class="bx bxl-instagram" onClick={() => redirectTo('https://www.instagram.com/astaalol')}></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedorLol3">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Chile.svg.webp")} />

              <h2>Neadz</h2>
              <h4>Esteban Fernando San Martín Durán</h4>

              <div class="icons">
              <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/neadz_')}></i>
              <i class="bx bxl-instagram" onClick={() => redirectTo('https://www.instagram.com/neadz1')}></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedorLol4">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Argentina.svg.webp")} />

              <h2>Pipo</h2>
              <h4>Leopoldo Martín Corvalán Kurz</h4>

              <div class="icons">
                <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/pipo_corvalan')}></i> 
                
                <i class="bx bxl-instagram" onClick={() => redirectTo('https://www.instagram.com/pipo_corvalan')}></i>
              </div>
            </div>
        </div>
      </div>
      </div>
      </div>
      <div class="list2">

      <div class="contenedor">
        <div class="perfil-contenedorLol5">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Chile.svg.webp")} />

              <h2>Lyg</h2>
              <h4>Diego Ulloa <br></br> Fuentes</h4>

              <div class="icons">
                <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/1lyg1')}></i>
                <i class="bx bxl-instagram" onClick={() => redirectTo('https://www.instagram.com/diegoo.ulloaa')}></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedorLol6">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Brazil.svg.webp")} />

              <h2>Mad</h2>
              <h4>Mateus Rafael <br></br> Mathias (coach)</h4>

              <div class="icons">
                <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/maadge1')}></i>
                <i class="bx bxl-instagram" onClick={() => redirectTo('https://www.instagram.com/madge.lol/')}></i>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="contenedor">
        <div class="perfil-contenedorLol7">
          <div class="perfil-wrapper effect-wrap">
            
            <div class="perfil-carta">
              <img src={require("assets/img/Flag_of_Brazil.svg.webp")} />

              <h2>Machado</h2>
              <h4>Gabriel Yps <br></br> Machado (analista)</h4>

              <div class="icons">
                <i class="bx bxl-twitter" onClick={() => redirectTo('https://twitter.com/machado7k')}></i>
                
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
