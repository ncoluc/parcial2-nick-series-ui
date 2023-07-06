import React, { useState } from "react";
import "../componentsStyles/footer.css";
import { NavDropdown } from "react-bootstrap";

function BotonGenero({ filtrarListaPorGenero }) {
  const [tituloGenero, setTituloGenero] = useState("Géneros");

  const handleGeneroSeleccionado = (event) => {
    const value = event.target.getAttribute("value");
    const tituloEspanol = event.target.getAttribute("data-espanol");
    setTituloGenero(tituloEspanol);
    filtrarListaPorGenero(value);
  };

  return (
    <>
      <div>
        <NavDropdown id="navbarScrollingNavDropdown" size="sm" variant="secondary" title={tituloGenero}>
          <NavDropdown.Item value="Action" data-espanol="Acción" onClick={handleGeneroSeleccionado}>Acción</NavDropdown.Item>
          <NavDropdown.Item value="Adventure" data-espanol="Aventura" onClick={handleGeneroSeleccionado}>Aventura</NavDropdown.Item>
          <NavDropdown.Item value="Anime" data-espanol="Anime" onClick={handleGeneroSeleccionado}>Anime</NavDropdown.Item>
          <NavDropdown.Item value="Comedy" data-espanol="Comedia" onClick={handleGeneroSeleccionado}>Comedia</NavDropdown.Item>
          <NavDropdown.Item value="Drama" data-espanol="Drama" onClick={handleGeneroSeleccionado}>Drama</NavDropdown.Item>
          <NavDropdown.Item value="Romance" data-espanol="Romance" onClick={handleGeneroSeleccionado}>Romance</NavDropdown.Item>
          <NavDropdown.Item value="Crime" data-espanol="Crimen" onClick={handleGeneroSeleccionado}>Crimen</NavDropdown.Item>
          <NavDropdown.Item value="Thriller" data-espanol="Thriller" onClick={handleGeneroSeleccionado}>Thriller</NavDropdown.Item>
          <NavDropdown.Item value="Supernatural" data-espanol="Sobrenatural" onClick={handleGeneroSeleccionado}>Sobrenatural</NavDropdown.Item>
          <NavDropdown.Item value="Science-Fiction" data-espanol="Ciencia ficción" onClick={handleGeneroSeleccionado}>Ciencia ficción</NavDropdown.Item>
          <NavDropdown.Item value="Children" data-espanol="Niños" onClick={handleGeneroSeleccionado}>Niños</NavDropdown.Item>
          <NavDropdown.Item value="Family" data-espanol="Familia" onClick={handleGeneroSeleccionado}>Familia</NavDropdown.Item>
          <NavDropdown.Item value="Fantasy" data-espanol="Fantasia" onClick={handleGeneroSeleccionado}>Fantasia</NavDropdown.Item>
          <NavDropdown.Item value="History" data-espanol="Historia" onClick={handleGeneroSeleccionado}>Historia</NavDropdown.Item>
        </NavDropdown>
      </div>
    </>
  );
}

export default BotonGenero;
