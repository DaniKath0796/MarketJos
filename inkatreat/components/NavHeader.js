import Link from "next/link";
import navStyles from "../styles/NavHeader.module.css";
import { useState, useContext } from "react";
import MainSvg from "./Svg/MainSvg";
import CloseSvg from "./Svg/CloseSvg";
import PerfilSvg from "./Svg/PerfilSvg";
import { DataContext } from "../store/GlobalState";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  return (
    <>
      <div className={navStyles.header}>
        <div className={navStyles.nav}>
          <div className={navStyles.mobileMenu} onClick={handleClick}>
            {click ? (
              <CloseSvg
                fill={"white"}
                width="20px"
                height="20px"
                className={navStyles.menuIcon}
              />
            ) : (
              <MainSvg
                fill={"white"}
                width="20px"
                height="20px"
                className={navStyles.menuIcon}
              />
            )}
          </div>

          <div className={navStyles.abcd}>
            <Link href="/"> Inkatreat</Link>
          </div>
          <ul className={click ? "navOption active" : "navOption"}>
            <li className={navStyles.option} onClick={closeMobileMenu}>
              <Link href="/"> Beneficios</Link>
            </li>

            <li className={navStyles.option} onClick={closeMobileMenu}>
              <Link href="/categorias"> Categorias</Link>
            </li>

            <li className={navStyles.option} onClick={closeMobileMenu}>
              {" "}
              <Link href="/registroVendedor">
                <a>Unete a nosotros</a>
              </Link>
            </li>

            <li
              className={(navStyles.option, navStyles.optionMobile)}
              onClick={closeMobileMenu}
            >
              <Link href="/">
                <a> Home</a>
              </Link>
            </li>

            <li
              className={(navStyles.option, navStyles.optionMobile)}
              onClick={closeMobileMenu}
            >
              <Link href="/login"> Identificate</Link>
            </li>
          </ul>
        </div>
        <ul className="singinUp">
          <li className={navStyles.singin} onClick={closeMobileMenu}>
            <Link href="/login"> Identificate</Link>
          </li>
          <PerfilSvg fill={"white"} width={"20px"} />
        </ul>
      </div>

      <style jsx>
        {`
        .singinUp{
      display:flex;
      list-style-type:none;
      padding: 0px 5px;
    }
        .navOption {
        padding-left: 25px;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 50px;
        list-style-type: none;
                    }
 
    }

 


@media (max-width: 648px) {

    a{
        width: 100%;
        height: 50px;
        justify-content: center;
        padding: 15px
        
    }
        .navOption {
          display: flex;
          width: 60%;
         
          position: absolute;
          top: 32px;
          left: -100%;
          opacity: 50%;
          transition: all 0.5s ease;
          flex-direction: column;
          list-style-type: none;
          grid-gap: 0px;
          
        }

        

        .navOption.active {
          background: orange;
          left: 0;
          opacity: 1;
          transition: all 0.5s ease;
          z-index: 1000;
          align-content: center; 
          padding-left: 0px;
          border-radius: .5%;
        }
        .singinUp {
          display: none;
        }

        .sign-up{
          background: rgb(222, 9, 241);
          border-radius: 3px;
          color: white;
          padding: 20px 0px;
          width: 80%;
          align-self: flex-end;
          border-radius: 3px;
        }

        }
                        `}
      </style>
    </>
  );
};

export default Nav;
