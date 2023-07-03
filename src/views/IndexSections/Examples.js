
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
  const textos = [
    
    "Estamos por comenzar un nuevo mes, lleno de memes pero también de actividad para nosotros, por lo tanto, esperamos que julio sea nuestro (guiño, guiño). Tendremos cinco competencias para disfrutar y emocionarnos, incluso algunas de ellas con novedades. Vamos a comenzar anunciando nuestra participación en Mobile Legends en dos frentes distintos. A partir del 1 de julio, estaremos compitiendo en “MLBB LATAM Super League South Season 3”, la Liga Profesional de América Latina. Dicha Liga finalizará el 5 de Agosto y tendrá como gran atractivo a los Play Offs que serán el 25, 26 y 27 de agosto. Ahí estaremos combatiendo con un roster argentino y uruguayo.",

  "El 8 de julio comenzaremos a tirar magias en la #MPL, la Liga Profesional de Brasil, obviamente con un equipo totalmente brasileño que tendrá la particularidad de representarnos bajo el nombre de Malvinas Gaming Brasil. En este caso la etapa de Play Offs será del 24 al 27 de agosto. Un dato importante de Mobile Legends es que los mejores buscarán su cupo para la Liga Latam, competencia que dará la clasificación a nada más y nada menos que el mundial M5. Recordamos que Malvinas ya estuvo en dos de los cuatro mundiales jugados hasta el momento. Por otra parte, en Free Fire vamos a tener dos frentes también: Free Fire League y Retadores. En Free Fire League vamos a tener un roster 100% LATAM, con un argentino, dos chilenos, un peruano y un mexicano. La competencia comenzará el 8 de julio y finalizará en el mes de septiembre, serán 3 meses de pura emoción como nos tiene acostumbrados Free Fire. Pronto tendrán más información sobre el equipo para que comiencen a apoyar a los jugadores en las redes. Pasando a Retadores, la acción arrancará unos días antes, el 5 de julio, para terminar el 30 de agosto. El roster estará conformado por argentinos, chilenos y un haitíano. Nos queda hablar de #LOL. El 1 de junio comenzamos a disputar la Liga Regional Sur bajo el nombre de Malvinas Rise, luego de la comunión con el equipo brasilero. El equipo es bien LATAM: dos brasileños, dos chilenos y un argentino. La etapa regular finalizará el 21 de julio para comenzar con los Play Offs el 27 de julio y tener la gran Final el 27 de agosto. Los chicos ya están hace tiempo en la Gaming House enfocados plenamente en esta etapa clasificatoria y hasta el momento cosechan 6 triunfos y 5 derrotas, lo que los ubica en la quinta posición, por debajo de Wap Esports, Primate, Furious Gaming y Globant Emerald Team.",
  
  
  "Estamos por comenzar un nuevo mes, lleno de memes pero también de actividad para nosotros, por lo tanto, esperamos que julio sea nuestro (guiño, guiño). Tendremos cinco competencias para disfrutar y emocionarnos, incluso algunas de ellas con novedades. Vamos a comenzar anunciando nuestra participación en Mobile Legends en dos frentes distintos. A partir del 1 de julio, estaremos compitiendo en “MLBB LATAM Super League South Season 3”, la Liga Profesional de América Latina. Dicha Liga finalizará el 5 de Agosto y tendrá como gran atractivo a los Play Offs que serán el 25, 26 y 27 de agosto. Ahí estaremos combatiendo con un roster argentino y uruguayo."
  ];


  const limiteCaracteres = 136;
  const [mostrarCompleto, setMostrarCompleto] = useState([false, false, false]);
  const [textosVisibles, setTextosVisibles] = useState([]);
  

  useEffect(() => {
    const textosVisiblesActualizados = textos.map((texto, index) => {
      if (mostrarCompleto[index]) {
        return texto;
      } else {
        const textoRecortado = texto.replace(/<[^>]+>/g, ""); // Eliminar las etiquetas HTML
        return textoRecortado.length > limiteCaracteres
          ? textoRecortado.slice(0, limiteCaracteres) + "..."
          : textoRecortado;
      }
    });
    setTextosVisibles(textosVisiblesActualizados);
  }, [mostrarCompleto]);

  const handleClick = (index) => {
    const mostrarCompletoActualizado = [...mostrarCompleto];
    mostrarCompletoActualizado[index] = !mostrarCompleto[index];
    setMostrarCompleto(mostrarCompletoActualizado);
  };
  return (
    
    <Container>
      <h1>¡JULIO ES DE MALVINAS!</h1>
    <br></br><hr className="line-primary" style={{ width: '5%', margin: '0 auto' }}/><br></br><br></br>
    <div className="slider-container">
        <Slider {...settings} className="sliderNoticias">
          
        <div className="noticia1" href="/sobrenosotros">
        

        <img
                  src={require("assets/img/noticia1.webp")}
                />
        <hr className="line-primary" />
    <h2 className="textoNoticias">#JulioEnMVG</h2>
    <p className="textoNoticias"dangerouslySetInnerHTML={{ __html: textosVisibles[0] }}></p>
          <Button onClick={() => handleClick(0)}>
            {mostrarCompleto[0] ? "Ver menos" : "Ver más"}
          </Button> </div>

    <div className="noticia1">
    <img
                  src={require("assets/img/noticia2.webp")}
                />
                <hr className="line-primary" />
    <h2 className="textoNoticias">Nuestros soldados para la MLSL</h2>
    <p className="textoNoticias">{textosVisibles[1]}</p>
          <Button onClick={() => handleClick(1)}>
            {mostrarCompleto[1] ? "Ver menos" : "Ver más"}
          </Button></div>
    

    <div class="noticia1">
    <img
                  src={require("assets/img/noticia3.webp")}
                />
                <hr className="line-primary" />
    <h2 className="textoNoticias">Momento chill de nuestro equipo de LOL luego de ganarle a Primate</h2>
    <p className="textoNoticias">Julio tiene que ser de Malvinas…<br></br> #VamosMalvinas
      
    </p>
    </div>
      </Slider>
    </div>
      </Container>

  );
}
