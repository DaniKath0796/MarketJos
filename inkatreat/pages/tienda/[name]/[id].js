import Head from "next/head";
import { useState } from "react";
import { GetData } from "../../../utils/fetchData";
import Imagenstore from "../../../components/ImagenesVenta";
import Nav from "../../../components/Nav";
import Carrusel from "../../../components/items/Carrusel";

export default function DetalleTienda(props) {
  const [producto, setStores] = useState(props.productos);
  return (
    <>
      {producto.map((producto) => (
        <Imagenstore
          nombreTienda={props.nombreTienda}
          name={producto.nombre}
          imagenes={producto.imagenes}
          precio={producto.precio}
          descripcion={producto.descripcion}
        />
      ))}
      <Nav />
      {producto.map((producto) => (
        <Carrusel
          nombreProducto={producto.nombre}
          imagenes={producto.imagenes[0]}
        />
      ))}
    </>
  );
}

export async function getServerSideProps({ params: { name }, params: { id } }) {
  const res = await GetData(`producto/${id}`);
  return {
    props: {
      nombreTienda: name,
      productos: res.productos,
      result: res.result,
    },
  };
}
