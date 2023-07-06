import "../componentsStyles/seriesFavoritas.css";
import { useState } from "react";
import RowSerie from "./RowSerie";
import { Table, Button, Container, Row, Col, Offcanvas } from "react-bootstrap";

function SeriesFavoritas({ seriesFavoritas, agregarSerie }) {
  // Funcion para borrar producto
  const quitarSerie = (id) => {
    agregarSerie(seriesFavoritas.filter((serie) => serie.id !== id));
  };

  // Hook para ver series favoritas
  const [show, setShow] = useState(false);

  const listarSeries = (seriesFavoritas) => {
    return seriesFavoritas.map((serie) => (
      <tr key={serie.id}>
        <td>{serie.name}</td>
        <td>
          <Button variant="danger" onClick={() => quitarSerie(serie.id)}>
            X
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Mis series
      </Button>
      <Offcanvas show={show} onHide={() => setShow(false)} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mis series favoritas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Col className="series-favoritas-col">
              {seriesFavoritas.map((serie) => {
                return <RowSerie key={serie.id} seriesFavoritas={seriesFavoritas} agregarSerie={agregarSerie} serie={serie} />;
              })}
            </Col>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SeriesFavoritas;
