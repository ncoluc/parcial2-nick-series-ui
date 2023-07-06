import React from "react";
import "../componentsStyles/rowSerie.css";
import imagenSerieSinImagen from "../media/imagenes/serie-sin-imagen.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Image } from "react-bootstrap";

function RowSerie({ seriesFavoritas, agregarSerie, serie }) {
  //const [smShow, setSmShow] = useState(false);

  const seleccionarSerie = (seriePorAgregar) => {
    let serie = seriesFavoritas.find((serie) => serie.id === seriePorAgregar.id);
    if (!serie) {
      let nuevaSerie = { ...seriePorAgregar };
      agregarSerie([...seriesFavoritas, nuevaSerie]);
    }
  };

  const eliminarSerie = (seriePorEliminar) => {
    agregarSerie(seriesFavoritas.filter((serie) => serie.id !== seriePorEliminar.id));
  };

  function verificarElementoEn(serieControl) {
    return seriesFavoritas.find((serie) => serie.id === serieControl.id);
  }

  return (
    <>
      <Row className="serie-row">
        <Col className="imagen-serie-col" md={2}>
          {serie.image ? <Image src={serie.image.medium}></Image> : <Image src={imagenSerieSinImagen}></Image>}
        </Col>
        <Col className="datos-serie-col" md={8}>
          <Row className="titulo-serie-row">
            <h4>{serie.name}</h4>
          </Row>
          <Row dangerouslySetInnerHTML={{ __html: serie.summary }}></Row>
          <Row>
            <Col className="datos-extra-col">
              {serie.status && <div className="dato-extra">Estado: {serie.status}</div>}
              {serie.premiered && <div className="dato-extra">Inicio: {serie.premiered}</div>}
              {serie.ended && <div className="dato-extra">Fin: {serie.ended}</div>}
              {serie.network && serie.network.name && <div className="dato-extra">Canal: {serie.network.name}</div>}
              {serie.webChannel && serie.webChannel.name && <div className="dato-extra">Streaming: {serie.webChannel.name}</div>}
            </Col>
          </Row>
        </Col>
        <Col className="agregar-serie-col" md={2}>
          <Row>
            <h2>{serie.rating.average}</h2>
            {!verificarElementoEn(serie) && (
              <Button className="btn-agregar" variant="primary" onClick={() => seleccionarSerie(serie)}>
                Agregar serie
              </Button>
            )}
            {verificarElementoEn(serie) && (
              <Button variant="danger" onClick={() => eliminarSerie(serie)}>Quitar serie</Button>
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default RowSerie;
