import React, { useRef } from "react";
import "../componentsStyles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logoNick from "../media/iconos/logo-nick-series.png";
import SeriesFavoritas from "./SeriesFavoritas";
import { Button, Container, Nav, Navbar, Image, Form } from "react-bootstrap";

function Header({ seriesFavoritas, agregarSerie, busquedaSerie, modificarBusqueda, realizarBusquedaEnApi }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const busquedaEnVivo = (e) => {
    modificarBusqueda(e.target.value);
    realizarBusquedaEnApi(e.target.value);
  };

  const handleScrollToSeries = () => {
    const seriesElement = document.getElementById("series");
    if (seriesElement) {
      seriesElement.scrollIntoView();
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>
          <Image src={logoNick} alt="Nick Series" fluid className="logo-nav" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 items-nav" navbarScroll>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#series">Series</Nav.Link>
            <Nav.Link href="#redes">Redes</Nav.Link>
            <Nav.Link href="#misSeries">
              <SeriesFavoritas seriesFavoritas={seriesFavoritas} agregarSerie={agregarSerie} />
            </Nav.Link>
          </Nav>
          <Form onSubmit={handleSubmit} className="d-flex">
            <Form.Control type="search" placeholder="NOMBRE SERIE" className="me-2" aria-label="Search" value={busquedaSerie} onChange={(e) => busquedaEnVivo(e)} onFocus={handleScrollToSeries} />
            <Button variant="outline-success" href="#series" onClick={() => realizarBusquedaEnApi(busquedaSerie)}>
              BUSCAR
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
