import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import StoreItem from "../components/StoreItem";
import Container from "../components/Container";
import headerStyles from "../styles/Header.module.css";
import { GetData } from "../utils/fetchData";

export default function Home(props) {
  const router = useRouter();
  const [stores, setStores] = useState(props.stores);

  const [products, setProducts] = useState(props.productos);
  console.log(products[3].logo);

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
          <StoreItem
            ima={products[3].logo}
            nombre={products[3].nombreTienda}
            categoria="regalos"
          />
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
      productos: res.tiendas,
      result: res.result,
    },
  };
}
