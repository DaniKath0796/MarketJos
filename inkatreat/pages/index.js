import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import StoreItem from "../components/tienda/StoreItem";
import Container from "../components/Container";
import headerStyles from "../styles/Header.module.css";
import { GetData } from "../utils/fetchData";

export default function Home(props) {
  const router = useRouter();
  const [tienda, setStores] = useState(props.tiendas);

  return (
    <>
      <Head>
        <title>Inkatreat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={styles.body}>
        <p className={headerStyles.description}>
          Te ayudamos a que el mundo te vea
        </p>
        <Container>
          {tienda.lenght === 0 ? (
            <h2>No hay Tiendas</h2>
          ) : (
            tienda.map((tienda) => (
              <StoreItem
                ima={tienda.logo}
                nombre={tienda.nombreTienda}
                categoria={tienda.rubroId.nombre}
                color={tienda.rubroId.color}
              />
            ))
          )}
        </Container>
      </body>

      <style jsx>{``}</style>
    </>
  );
}

export async function getServerSideProps() {
  const res = await GetData("tienda");
  return {
    props: {
      tiendas: res.tiendas,
      result: res.result,
    },
  };
}
