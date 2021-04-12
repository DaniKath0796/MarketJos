import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/#"> Los mas vendidos</Link>
        </li>

        <li>
          <Link href="/"> Menores precios</Link>
        </li>

        <li>
          <Link href="/">Mejor Calificacion</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
