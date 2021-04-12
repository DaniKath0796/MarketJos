import Head from "next/head";
import Link from "next/link";
import {useState} from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import StoreItem from "../components/StoreItem"
import Container from "../components/Container"
import headerStyles from "../styles/Header.module.css";
import {getData} from '../utils/fetchData'

export default function Home(props) {
	const router = useRouter();
	const [stores,setStores]= useState(props.stores)

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
	
					<StoreItem nombre='gatitos' categoria='regalos'/><StoreItem nombre='perritos' categoria='tazas'/>
					<StoreItem nombre='harry potter' categoria='regalos'/>
					<StoreItem nombre='gatitos' categoria='regalos' /><StoreItem nombre='gatitos' categoria='regalos'/>
					
</Container>
			</body>

			<style jsx>
			{`
				`}
			</style>
		</>
	);

	
	}
