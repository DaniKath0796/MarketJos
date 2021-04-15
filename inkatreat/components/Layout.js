import Nav from "./Nav";
import Head from "next/Head";
import NavHeader from "./NavHeader";
import Header from "./Header";
import Notify from "./Notify";

import styles from "../styles/Home.module.css";
import Dropdown from "./items/Dropdown";
export default function Layout({ children }) {
  return (
    <>
      <Dropdown></Dropdown>
     <div className='separator'> </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <Notify />
          {children}
        </main>
      </div>

      <style jsx>{`
      .separator{
        height:150px;
      }
      `}
      </style>
    </>
  );
}
