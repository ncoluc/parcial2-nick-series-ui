import React, { useState } from "react";
import "../componentsStyles/footer.css";
import { NavDropdown } from "react-bootstrap";

function BotonEstado({ filtrarListaPorEstado }) {
  const [tituloEstado, setTituloEstado] = useState("Estado");

  const handleEstadoSeleccionado = (event) => {
    const value = event.target.getAttribute("value");
    const tituloEspanol = event.target.getAttribute("data-espanol");
    setTituloEstado(tituloEspanol);
    filtrarListaPorEstado(value);
  };

  return (
    <>
      <div>
        <NavDropdown id="navbarScrollingDropdown" size="sm" variant="secondary" title={tituloEstado}>
          <NavDropdown.Item value="In Development" data-espanol="Desarrollo" onClick={handleEstadoSeleccionado}>Desarrollo</NavDropdown.Item>
          <NavDropdown.Item value="Running - To Be Determined" data-espanol="Emisión" onClick={handleEstadoSeleccionado}>Emisión</NavDropdown.Item>
          <NavDropdown.Item value="Ended" data-espanol="Finalizada" onClick={handleEstadoSeleccionado}>Finalizada</NavDropdown.Item>
        </NavDropdown>
      </div>
    </>
  );
}

export default BotonEstado;
