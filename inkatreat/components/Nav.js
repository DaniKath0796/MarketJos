import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/"> Home</Link>
        </li>

        <li>
          <Link href="/categorias"> Categorias</Link>
        </li>

        <li>
          <Link href="/registroVendedor">Unete a nosotros</Link>
        </li>

        <li>
          <Link href="/login"> Mi cuenta</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
