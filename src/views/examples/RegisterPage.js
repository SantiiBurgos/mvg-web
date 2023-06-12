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

export default function RegisterPage() {
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
            



      <h1>EQUIPOS</h1>
      <div class="list">
        <div class="product">
          <img
            src={require("assets/img/r6_w.webp")}
          />
          <div>
            <img width={300}
            src={require("assets/img/t1.JPG")}
          />

            <br />
            <a href="r6"><p>Rainbow Six</p></a>
          </div>
        </div>
        <div class="product">
          <img
            class="se-item"
            src={require("assets/img/mlbb_w.png")}
          />
          <div>
          <img width={300}
            src={require("assets/img/mlbbTeam.jpg")}
          />
            
            <br />
            <a href="MLBB"><p>Mobile Legends</p></a>
          </div>
        </div>
        <div class="product">
          <img
              class="se-item"
              src={require("assets/img/lol.webp")}
            />
            <div>
            <img width={300}
              src={require("assets/img/lolCard2.webp")}
            />
              
              <br />
              <a href="LOL"><p>League of Legends</p></a>
            </div>
        </div>

        <div class="product">
          <img
              class="se-item"
              src={require("assets/img/freefire.png")}
            />
            <div>
            <img width={300}
              src={require("assets/img/freefireTeam.jpg")}
            />
              
              <br />
              <a href="#"><p>Free Fire</p></a>
            </div>
        </div>
        
      </div>




           

      <Footer />
    </>
  );
}
