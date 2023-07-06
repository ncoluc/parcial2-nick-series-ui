import React from "react";
import "../componentsStyles/footer.css";
import logoNick from "../media/iconos/logo-nick-series.png";
import logoTvMaze from "../media/iconos/logo-tvmaze-api.png";
import instagramLogo from "../media/iconos/instagram.svg";
import twitterLogo from "../media/iconos/twitter.svg";
import facebookLogo from "../media/iconos/facebook.svg";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer id="redes">
      <Container>
        <Row>
          <Col md={4} className="col-footer">
            <img id="logo-footer" src={logoNick} loading="lazy" alt="Logo Nick Series" />
          </Col>
          <Col md={4} className="col-footer pt-4">
            <h4>Enlaces</h4>
            <a href="#nosotros">Nosotros</a>
            <a href="#series">Series</a>
          </Col>
          <Col md={4} className="col-footer pt-4">
            <h4>Redes Sociales</h4>
            <Col className="redes-footer">
              <a href="https://www.facebook.com/Virbela/" target="_blank">
                <img className="icon-red-social" src={facebookLogo} />
                Facebook
              </a>

              <a href="https://twitter.com/VirbelaHQ" target="_blank">
                <img className="icon-red-social" src={twitterLogo} />
                Twitter
              </a>

              <a href="https://www.instagram.com/virbelahq/" target="_blank">
                <img className="icon-red-social" src={instagramLogo} />
                Instagram
              </a>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className="derechos-footer">
            <span>© 2023 Nick Series - Powered by</span>
            <a className="powered-footer" href="https://www.tvmaze.com/api/" target="_blank">
              <img className="icon-powered" src={logoTvMaze} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
