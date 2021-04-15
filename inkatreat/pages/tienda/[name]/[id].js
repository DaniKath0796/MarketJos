import Head from "next/head";
import { useState } from "react";
import { GetData } from "../../../utils/fetchData";

export default function DetalleTienda(props) {
  return (
    <div>
      <Head>
        <title>Detalle tienda</title>
      </Head>
      <h1>Detalle tienda</h1>
    </div>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await GetData(`producto/${id}`);
  console.log(res);
  return {
    props: {
      productos: res.productos,
      result: res.result,
    },
  };
}
