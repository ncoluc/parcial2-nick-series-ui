import React from "react";
import "../componentsStyles/sectionListaSeries.css";
import { useState, useEffect } from "react";
import RowSerie from "./RowSerie";
import BotonEstado from "./BotonEstado";
import BotonGenero from "./BotonGenero";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Pagination, Row, Button, ButtonGroup } from "react-bootstrap";

function ListaSeries({ listaSeries, editarListaSerie, seriesFavoritas, agregarSerie, busquedaSerie, realizarBusquedaEnApi, listaSeriesPreFiltros }) {
  const [tipoFiltro, editarTipoFiltro] = useState("");
  const [filtroFechaEstreno, editarFiltroFechaEstreno] = useState("");
  const [filtroFechaFinalizacion, editarFiltroFechaFinalizacion] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const seriesPorPagina = 2;

  useEffect(() => {
    realizarBusquedaEnApi(busquedaSerie);
    editarTipoFiltro("");
    setPaginaActual(1);
  }, [busquedaSerie]);

  useEffect(() => {
    if (filtroFechaEstreno) {
      var seriesFiltradas = [];
      for (var i = 0; i < listaSeriesPreFiltros.length; i++) {
        if (listaSeriesPreFiltros[i].premiered && listaSeriesPreFiltros[i].premiered.includes(filtroFechaEstreno)) {
          seriesFiltradas.push(listaSeriesPreFiltros[i]);
        }
      }
      editarListaSerie(seriesFiltradas);
      setPaginaActual(1);
    }
  }, [filtroFechaEstreno]);

  useEffect(() => {
    if (filtroFechaFinalizacion) {
      var seriesFiltradas = [];
      for (var i = 0; i < listaSeriesPreFiltros.length; i++) {
        if (listaSeriesPreFiltros[i].ended && listaSeriesPreFiltros[i].ended.includes(filtroFechaFinalizacion)) {
          seriesFiltradas.push(listaSeriesPreFiltros[i]);
        }
      }
      editarListaSerie(seriesFiltradas);
      setPaginaActual(1);
    }
  }, [filtroFechaFinalizacion]);

  const filtrarListaPorGenero = (genero) => {
    var seriesFiltradas = [];
    for (var i = 0; i < listaSeriesPreFiltros.length; i++) {
      if (listaSeriesPreFiltros[i].genres.includes(genero)) {
        seriesFiltradas.push(listaSeriesPreFiltros[i]);
      }
    }
    editarListaSerie(seriesFiltradas);
    setPaginaActual(1);
  };

  const filtrarListaPorEstado = (estado) => {
    var seriesFiltradas = [];
    for (var i = 0; i < listaSeriesPreFiltros.length; i++) {
      if (estado.includes(listaSeriesPreFiltros[i].status)) {
        seriesFiltradas.push(listaSeriesPreFiltros[i]);
      }
    }
    editarListaSerie(seriesFiltradas);
    setPaginaActual(1);
  };

  const ordenarListaPorRating = () => {
    const listaOrdenada = [...listaSeries];
    listaOrdenada.sort((a, b) => b.rating.average - a.rating.average);
    editarListaSerie(listaOrdenada);
    setPaginaActual(1);
  };

  const ordenarListaPorNombre = () => {
    const listaOrdenada = [...listaSeries];
    listaOrdenada.sort((a, b) => a.name.localeCompare(b.name));
    editarListaSerie(listaOrdenada);
    setPaginaActual(1);
  };

  const limpiarFiltros = () => {
    editarTipoFiltro("");
    editarListaSerie(listaSeriesPreFiltros);
  };

  const totalPaginas = Math.ceil(listaSeries.length / seriesPorPagina);
  const listaPaginada = listaSeries.slice((paginaActual - 1) * seriesPorPagina, paginaActual * seriesPorPagina);

  return (
    <>
      <Container className="container-lista-series" id="series">
        <div className="titulo-buscador-series">
          <h3 style={{ textAlign: "center" }}>
            <span>Series</span>
          </h3>
        </div>
        {busquedaSerie && (
          <h3>
            <span>Estas buscando: {busquedaSerie}</span>
          </h3>
        )}

        <Col>
          <Row className="filtros-row">
            <Col className="filtros-col" md={4}>
              <div>
                <p>Filtrar por: </p>
              </div>
              <div>
                <select value={tipoFiltro} onChange={(e) => editarTipoFiltro(e.target.value)}>
                  <option value="">Tipo de filtro</option>
                  <option value="genres">Género</option>
                  <option value="status">Estado</option>
                  <option value="premiered">Fecha de estreno</option>
                  <option value="ended">Fecha de finalización</option>
                </select>
              </div>
              <div>
                {tipoFiltro === "genres" && <BotonGenero filtrarListaPorGenero={filtrarListaPorGenero} />}
                {tipoFiltro === "status" && <BotonEstado filtrarListaPorEstado={filtrarListaPorEstado} />}
                {tipoFiltro === "premiered" && <input type="number" placeholder="Año" value={filtroFechaEstreno} onChange={(e) => editarFiltroFechaEstreno(e.target.value)} />}
                {tipoFiltro === "ended" && <input type="number" placeholder="Año" value={filtroFechaFinalizacion} onChange={(e) => editarFiltroFechaFinalizacion(e.target.value)} />}
              </div>
            </Col>
            <Col md={2} className="filtros-col">
              <Button variant="danger" size="sm" onClick={limpiarFiltros}>
                Quitar filtros
              </Button>
            </Col>
            <Col md={4} className="filtros-col">
              <div>
                <p>Ordenar por:</p>
              </div>
              <ButtonGroup size="sm">
                <Button variant="secondary" onClick={() => ordenarListaPorNombre()}>
                  Nombre
                </Button>
                <Button variant="secondary" onClick={() => ordenarListaPorRating()}>
                  Rating
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              {listaPaginada.map((serie, index) => {
                const globalIndex = (paginaActual - 1) * seriesPorPagina + index + 1;
                return <RowSerie key={serie.id} seriesFavoritas={seriesFavoritas} agregarSerie={agregarSerie} serie={serie} />;
              })}
            </Col>
          </Row>
          <Row className="pagination-row-lista-serie">
            <Pagination size="sm">
              {Array.from({ length: totalPaginas }).map((_, index) => (
                <Pagination.Item key={index + 1} active={index + 1 === paginaActual} onClick={() => setPaginaActual(index + 1)}>
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default ListaSeries;
