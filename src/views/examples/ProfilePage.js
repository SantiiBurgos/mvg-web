import React from "react";
import classnames from "classnames";
import Slider from 'react-slick';


// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

const settings = {

  dots: true, // Mostrar los puntos de navegación
  infinite: false, // Permitir desplazamiento infinito
  speed: 500, // Velocidad de desplazamiento
  slidesToShow: 3, // Número de elementos a mostrar al mismo tiempo
  slidesToScroll: 1, // Número de elementos para desplazar por vez
};



let ps = null;

export default function ProfilePage() {

  return (
    <>


      <ExamplesNavbar />
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
              <Col md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  class="fotito"
                  src={require("assets/img/DSC07358.jpg")}
                />
                
              </Col>
              
              <Col md="6">
              
                <div className="px-md-5">
                <h2><b>SOBRE NOSOTROS</b></h2>
                <hr className="line-success" />
                  <p>
                  Malvinas Gaming es una empresa multigaming argentina fundada en 2013. Nuestra reconocida trayectoria deportiva en más de diez esports, nos hizo ser uno de los equipos más competitivos de LATAM. 
                  Contamos con más de 30 jugadores profesionales de todo el continente representando a la institución, un Staff operativo encargado del funcionamiento de la empresa, y Gaming Houses equipadas para potenciar rendimientos deportivos y de contenidos. 
                  </p>
                  
                  
                  <p>
                  Nuestra misión es lograr que cada integrante de La Vieja Guardia se sienta identificada con nuestros valores al vestir nuestra camiseta, y formar profesionales para seguir impulsando el ecosistema de los deportes electrónicos en Latinoamérica.
                  </p>
                  <hr className="line-success" />
                </div>


                
              </Col>

              
            </Row>

            <h1>Nuestros Logros</h1>

<div style={{ textAlign: 'center' }}>

</div>

<br></br><hr className="line-success" style={{ width: '5%', margin: '0 auto' }}/><br></br><br></br>


            <Slider {...settings}>
            <div class="cardLogros">
      <div class="cardLogros-content">
        <h2 class="cardLogros-titel"> <b>2016</b></h2>
        <p class="cardLogros-description">
          <b><b>1st FIFA</b></b> - Copa Frávegafifa.<br></br></p>

      </div>
    </div>
    <div class="cardLogros2">
      <div class="cardLogros-content">
        <h2 class="cardLogros-titel">2017</h2>
        <p class="cardLogros-description">
        <b><b>1st CSGO</b></b>- Musimundo Gaming Week.<br></br>
          <b><b>2nd CSGO</b></b> - La Liga Pro, Season 2.<br></br>
        <b><b> 1st FIFA</b></b> - Copa TyC.<br></br>
          <b><b>1st Fighting </b></b>- Argentina gaming show.<br></br>
          <b><b>2nd Hearthstone</b></b> - ESL Copa América.</p>

      </div>
    </div>
    <div class="cardLogros3">
      <div class="cardLogros-content">
        <h2 class="cardLogros-titel">2018</h2>
        <p class="cardLogros-description">
        <b><b>1st PUBG</b></b>- ESL LA League<br></br>
          <b><b>1st PUBG</b></b> - Argentina Gaming Show<br></br>
        <b><b> 1st CSGO</b></b> - Aorus League Cono sur<br></br>
          <b><b>1st Fortnite </b></b>- Argentina Game Show<br></br>
        </p>

      </div>
    </div>
    <div class="cardLogros4">
      <div class="cardLogros-content">
        <h2 class="cardLogros-titel">2019</h2>
        <p class="cardLogros-description">
        <b><b>1st CSGO</b></b>- AMD Red League<br></br>
          <b><b>1st</b></b> - Aorus League cono sur<br></br>
          <b><b>2nd CSGO</b></b> - Temporada de juegos</p>

      </div>
    </div>
    <div class="cardLogros5">
      <div class="cardLogros-content">
        <h2 class="cardLogros-titel">2020</h2>
        <p class="cardLogros-description">
        <b><b>1st R6</b></b>- Campeonato sudamericano<br></br>
          <b><b>1st FREEFIRE</b></b> - League latam sur</p>

      </div>
    </div>

    <div class="cardLogros6">
      <div class="cardLogros-content">
        <h2 class="cardLogros-titel">2021</h2>
        <p class="cardLogros-description">
        <b><b>1st MLBB</b></b>- Latam championship<br></br>
          <b><b>2nd CSGO</b></b> - Unity league flow, Season 2<br></br>
        <b><b> 4th FREEFIRE</b></b> - Freefire league, Gran final<br></br>
          <b><b>MLBB</b></b> - Mundial de Mobile Legends, M3</p>

      </div>
    </div>

    <div class="cardLogros7">
      <div class="cardLogros-content">
        <h2 class="cardLogros-titel">2022</h2>
        <p class="cardLogros-description">
        <b><b>5th R6</b></b>- EliteSix international<br></br>
          <b><b>1st R6</b></b> - Campeonato Sudamericano<br></br>
        <b><b> 1st SimRancing</b></b> - FireSport RACING<br></br>
          <b><b>1st Tekken7 </b></b>- Campeón Panamericano<br></br>
          <b><b>MLBB</b></b> - Clasificación a Mundial M4, Indonesia</p>

      </div>
    </div>
    </Slider>
            



            
         
          <h1>Sponsors Oficiales</h1>

          <div style={{ textAlign: 'center' }}>
          
      </div>
         
          <br></br><hr className="line-success" style={{ width: '5%', margin: '0 auto' }}/><br></br><br></br>
          
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        <img
          src={require("assets/img/jetsmart-white.png")}
          alt="Imagen"
          style={{ maxWidth: '50%', height: 'auto', margin: '0 auto' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ textAlign: 'center' }}> JetSMART es una aerolínea con gran trayectoria en la LATAM. Se unió a Malvinas como Sponsor Oficial en 2023, convirtiéndose en nuestro principal aliado para el trabajo tanto en contenidos, como en el acompañamiento de nuestros jugadores y staff en las aventuras de competencias tanto nacionales como internacionales. 
#VuelaSMART</p>
      </div>
    </div>

    <br></br><br></br><br></br>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={require("assets/img/jetsmart-white (1) (4).png")}
          alt="Imagen"
          style={{ maxWidth: '50%', height: 'auto', margin: '0 auto' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ textAlign: 'center' }}>  HM es una empresa rosarina de indumentaria deportiva que decidió vestir a todo Malvinas hace ya más de un año. Las camisetas e indumentaria de MVG recorrieron ya, de la mano de HM, gran parte de Argentina, Peru, Bolivia y hasta Indonesia por nuestra participación en el mundial de MLBB #M4.</p>
      </div>
    </div>

    <br></br><br></br><br></br>
    <h1>Partners Oficiales</h1>

<div style={{ textAlign: 'center' }}>

</div>

<br></br><hr className="line-success" style={{ width: '5%', margin: '0 auto' }}/><br></br><br></br>


<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
  
<div style={{ display: 'flex', alignItems: 'center' }}>

<img
src={require("assets/img/betsson.webp")}
alt="Imagen"
style={{ maxWidth: '50%', height: 'auto', margin: '0 auto' }}
/>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
<p style={{ textAlign: 'center' }}> Betsson es una casa de apuestas virtual, que incluye actividades tanto en deportes tradicionales como en esports. En Malvinas trabajamos muy de cerca los contenidos orgánicos para esta última arista.</p>
</div>
</div>
    </Container>
        </section>
        


        




        
      </div>
      <Footer />
    </>
  );
}
