import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import login from "../components/Logeo";
import headerStyles from "../styles/Header.module.css";
import Layout from "../components/Layout";

export default function Home() {
	const router = useRouter();

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
			</body>
		</>
	);
}
