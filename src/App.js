import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Nosotros from "./components/Nosotros";
import ListaSeries from "./components/ListaSeries";
import Footer from "./components/Footer";

function App() {
  let seriesFavoritasGuardadas = JSON.parse(localStorage.getItem("seriesFavoritas")) || [];
  const [seriesFavoritas, agregarSerieFavorita] = useState(seriesFavoritasGuardadas);
  const [listaSeriesPreFiltros, editarListaPreFiltros] = useState([]);
  const [listaSerie, editarListaSerie] = useState([]);
  const [busquedaSerie, modificarBusqueda] = useState("");

  useEffect(() => {
    localStorage.setItem("seriesFavoritas", JSON.stringify(seriesFavoritas));
  }, [seriesFavoritas]);

  const realizarBusquedaEnApi = async (valor) => {
    if (valor === undefined) {
      return null;
    }
    try {
      const api = await fetch(`https://api.tvmaze.com/search/shows?q=${valor}`);
      const resultado = await api.json();

      const listaFormateada = resultado.map((item) => {
        const { id, name, genres, status, premiered, ended, rating, network, webChannel, image, externals, summary } = item.show;

        const formattedNetwork = network
          ? {
              id: network.id,
              name: network.name,
            }
          : null;

        return {
          id,
          name,
          genres,
          status,
          premiered,
          ended,
          rating,
          network: formattedNetwork,
          webChannel,
          image,
          externals,
          summary,
        };
      });
      editarListaSerie(listaFormateada);
      editarListaPreFiltros(listaFormateada);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header seriesFavoritas={seriesFavoritas} agregarSerie={agregarSerieFavorita} busquedaSerie={busquedaSerie} modificarBusqueda={modificarBusqueda} realizarBusquedaEnApi={realizarBusquedaEnApi} />
      <Nosotros />
      <ListaSeries listaSeries={listaSerie} editarListaSerie={editarListaSerie} seriesFavoritas={seriesFavoritas} agregarSerie={agregarSerieFavorita} busquedaSerie={busquedaSerie} realizarBusquedaEnApi={realizarBusquedaEnApi} listaSeriesPreFiltros={listaSeriesPreFiltros} />
      <Footer />
    </>
  );
}

export default App;
