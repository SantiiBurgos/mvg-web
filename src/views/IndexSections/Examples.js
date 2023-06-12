
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import Slider from 'react-slick';

const settings = {

  dots: true, // Mostrar los puntos de navegación
  infinite: false, // Permitir desplazamiento infinito
  speed: 500, // Velocidad de desplazamiento
  slidesToShow: 3, // Número de elementos a mostrar al mismo tiempo
  slidesToScroll: 1, // Número de elementos para desplazar por vez
};




export default function Examples() {
  return (
    
    <Container>
      <h1>Noticias</h1>
    <br></br><hr className="line-primary" style={{ width: '5%', margin: '0 auto' }}/><br></br><br></br>
    <div className="slider-container">
        <Slider {...settings} className="sliderNoticias">
          
        <div className="noticia1" href="/sobrenosotros">
        

        <img
                  src={require("assets/img/IMG_7810.JPG")}
                />
        <hr className="line-primary" />
    <h2 className="textoNoticias">¡La gente enamorada del CM de Malvinas en AGS!</h2>
    <p className="textoNoticias">Se comenta que se hacía fila para pedirle una foto. Eos atque impedit vel vitae illum et totam quis sed enim magni. Aut consequatur voluptate id repudiandae eaque ut voluptas repellat ut adipisci iste ut officia fugit!
    </p>

    </div>

    <div className="noticia1">
    <img
                  src={require("assets/img/IMG_2996.JPG")}
                />
                <hr className="line-primary" />
    <h2 className="textoNoticias">¡Campeones del Six Invitational 2022!</h2>
    <p className="textoNoticias">Lorem ipsum dolor sit amet. Qui tempora ducimus ut quia quas a obcaecati consequatur non repellendus voluptatum quo ratione quia! Et ipsa cupiditate eum dolore tenetur et laborum galisum non officiis dolorum aut quod natus ex molestias nisi aut dignissimos placeat. Vel dolorum consequuntur cum quia cumque et distinctio perferendis. Eum minima velit id voluptas consequatur nam provident quidem et laboriosam quasi?</p>
    </div>
    

    <div class="noticia1">
    <img
                  src={require("assets/img/DSC03671.JPG")}
                />
                <hr className="line-primary" />
    <h2 className="textoNoticias">¡Campeones de la M4!</h2>
    <p className="textoNoticias">Ea distinctio ipsum rem omnis sint et unde ipsa ut minima labore aut rerum dignissimos ut ipsa nihil aut magnam dignissimos. Ut sint omnis et amet repudiandae qui repellendus architecto ut neque ipsa. Ut odio culpa At voluptatem voluptatem aut galisum assumenda aut expedita culpa vel velit quibusdam.
      
    </p>
    </div>
      </Slider>
    </div>
      </Container>

  );
}
