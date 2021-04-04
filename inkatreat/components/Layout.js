import Nav from "./Nav";
import Head from "next/Head";
import NavHeader from "./NavHeader";
import Header from "./Header";
import Notify from "./Notify";

import styles from "../styles/Home.module.css";
export default function Layout({ children }) {
  return (
    <>
      <NavHeader />
      <div className={styles.container}>
        <main className={styles.main}>
          <Notify />
          {children}
        </main>
      </div>
    </>
  );
}
