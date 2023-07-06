import React from "react";
import "../componentsStyles/sectionNosotros.css";
import logoNick from "../media/iconos/logo-nick-series.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Row, Col } from "react-bootstrap";

function Nosotros() {
  return (
    <>
      <Container id="nosotros" className="container-nosotros">
        <Row>
          <Col md={8}>
            <h1>¡Bienvenidos a Nick Series!</h1>
            <p className="nosotros-p">En Nick Series, nos apasiona el mundo de las series y queremos brindarte la mejor experiencia para descubrir y explorar nuevas series. Nuestra plataforma te permite buscar y filtrar series de acuerdo a tus preferencias, para que encuentres fácilmente lo que estás buscando.</p>
            <p className="nosotros-p">Con nuestro completo sistema de filtros, puedes seleccionar géneros específicos, el estado de la serie, así como también filtrar por fechas de estreno o finalización. Además, te ofrecemos la opción de ordenar los resultados por nombre o ranking, para que encuentres las mejores series según tus preferencias.</p>
          </Col>
          <Col md={4}>
            <Image src={logoNick} alt="Nick Series" fluid />
          </Col>
        </Row>
        <Row>
          <p className="nosotros-p">En Nick Series, nos esforzamos por simplificar tu experiencia al mantener toda la información de las series en un solo lugar. Ya no tendrás que perder tiempo buscando información dispersa, aquí encontrarás todos los detalles que necesitas, incluyendo información sobre la plataforma de streaming en la que se encuentran disponibles las series.</p>
          <p className="nosotros-p">Además, hemos creado una función especial para que puedas guardar tus series pendientes en una lista personalizada. Ya no necesitarás notas en papel o aplicaciones separadas, en Nick Series podrás mantener todas las series que te interesan en un solo lugar. Así siempre tendrás a mano tus próximas aventuras televisivas.</p>
          <p className="nosotros-p">Únete a nosotros en Nick Series y forma parte de una comunidad apasionada por las series. Tu opinión cuenta y tu voz es importante. Juntos, haremos de Nick Series el destino definitivo para los amantes de las series de televisión.</p>
        </Row>
      </Container>
    </>
  );
}

export default Nosotros;
