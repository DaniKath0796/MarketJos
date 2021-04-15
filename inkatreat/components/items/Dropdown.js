import HeartSvg from "../Svg/HeatSvg";
import Chevron from "../Svg/ChevronSVg";
import Cog from "../Svg/CogSvg";
import PerfilSvg from "../Svg/PerfilSvg";
import BackSvg from "../Svg/BackSvg";
import TiendaSvg from "../Svg/TiendaSvg";
import DiseaseSvg from "../Svg/DiseaseSvg";
import Link from "next/link";
import { useState } from "react";

export default function Dropdown({}) {
  const NavBarEnd = (props) => {
    return (
      <>
        <nav className="navbar">
          <ul className="navbar-nav-end">{props.children}</ul>
          <style jsx>{`
            .navbar-nav-end {
              max-width: 100%;
              height: 100%;
              display: flex;
              padding: 0;
              justify-content: flex-end;
              margin-top: -60px;
              align-self: flex-end;
            }
            .navbar {
              height: 60px;
              background-color: #ff9f1c;
              padding: 0;
              border-bottom: 1px solid #2ec4b6;
              color: white;
              z-index:1000;
            }
            ul {
              list-style: none;
              margin: 0;
              padding: 0;
            }
          `}</style>
        </nav>
      </>
    );
  };
  const Navbar = (props) => {
    return (
      <>
        <nav className="navbar">
          <ul className="navbar-nav">{props.children} </ul>
        </nav>
        <style jsx>
          {`
            ul {
              list-style: none;
              margin: 0;
              padding: 0;
            }

            a {
              color: white;
              text-decoration: none;
            }

            :root {
              --bg: #242526;
              --bg-accent: #484a4d;
              --text-color: #dadce1;
              --nav-size: 60px;
              --border: 1px solid #474a4d;
              --border-radius: 8px;
              --speed: 500ms;
            }

            .navbar {
              height: 60px;
              background-color: #ff9f1c;
              padding: 0 1rem;
              border-bottom: 1px solid #2ec4b6;
              color: white;
            }

            /* <ul> */
            .navbar-nav {
              max-width: 100%;
              height: 100%;
              display: flex;
              padding: 0;
              justify-content: flex-start;
            }
          `}
        </style>
      </>
    );
  };

  const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <li className="nav-item">
          <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
            {props.icon}
          </a>
          {open && props.children}
        </li>
        <style jsx>
          {`
            .nav-item {
              width: calc(60px * 0.8);
              display: flex;
              align-items: center;
              justify-content: center;
              grid-gap: 0px;       
              
            }

            .icon-button {
              --button-size: calc(60px * 0.5);
              width: var(--button-size);
              height: var(--button-size);
              background-color: #2ec4b6;
              border-radius: 50%;
              padding: 5px;
              margin: 2px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: filter 300ms;
            }

            .icon-button:hover {
              filter: brightness(1.05);
            }


}
          `}
        </style>
      </>
    );
  };

  const DropdownMenu = () => {
    const DropdownItem = (props) => {
      return (
        <>
          <a href={props.link} className="menu-item">
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
          </a>

          <style jsx>
            {`
              .menu {
                width: 100%;
              }

              .menu-item {
                height: 50px;
                display: flex;
                align-items: center;
                border-radius: 8px;
                transition: background 500ms;
                padding: 0.5rem;
              }
              .menu-item:hover {
                background-color: #52cec3;
              }
              .icon-right {
                margin-left: auto;
              }
              .icon-button {
                --button-size: calc(60px * 0.5);
                width: 30px;
                height: 30px;
                background-color: #2ec4b6;
                border-radius: 50%;
                padding: 5px;
                margin: 2px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: filter 300ms;
                margin-right: 12px;
                
              }

              .icon-button:hover {
                filter: brightness(1.2);
              }
            `}
          </style>
        </>
      );
    };

    return (
      <>
        
        <div className="dropdown">
          <DropdownItem link="/#">My profile</DropdownItem>
          <DropdownItem
            leftIcon={<Cog fill="#dadce1" width={20} height={20} />}
            link="/#">
            Settings
          </DropdownItem>
          <div className='option'>
          <DropdownItem
            leftIcon={<DiseaseSvg fill="#dadce1" width={20} height={20} />}
            link="/#">
            Beneficios
          </DropdownItem>
          <DropdownItem
            leftIcon={<TiendaSvg fill="#dadce1" width={20} height={20} />}
            link="/registroVendedor">
            Unete! 
          </DropdownItem>
          </div>
          <DropdownItem
            leftIcon={<BackSvg fill="#dadce1" width={20} height={20} />}
            link="/#">
            Salir 
          </DropdownItem>

        </div>
        <style jsx>{`
          .dropdown {
            position: absolute;
            top: 58px;
            width: 280px;
            transform: translateX(-45%);
            background-color: #ff9f1c;
            border: 1px solid #ff9f1c;
            border-radius: 8px;
            padding: 1rem;
            overflow: hidden;
            transition: height 500ms ease;
            
            
          }
          .option{
             display: none;   
            }
            @media (max-width: 648px) {
                
                .option{
             display: grid; 
            }
            }
            

        `}</style>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <Navbar>
          <li className="title">
            <Link href="/">Inkatreat</Link>
          </li>
          <div className="navOption">
            <li>
              <Link href="/"> Beneficios</Link>
            </li>
            <li>
              <Link href="/registroVendedor"> Unete</Link>
            </li>

          </div>
        </Navbar>
        <NavBarEnd>
          <li>
            <Link href="/login">Identificate</Link>
          </li>
          <NavItem icon={<PerfilSvg fill="#fdfffc" width={20} height={20} />}>
            <DropdownMenu />
          </NavItem>
        </NavBarEnd>
      </div>

      <style jsx>
        {`
          .container {
            position: fixed;
            width: 100%;
            z-index:10000;
          }
          .title {
            font-size: 40px;
            padding: 0;
            padding-top: 0;
          }
          .navOption {
            padding-left: 30px;
            display: grid;
            grid-template-columns: repeat(3, auto);
            grid-gap: 50px;
            list-style-type: none;
          }
          li {
            padding-top: 20px;
          }

          @media (max-width: 648px) {
            .navOption {
                display:none;
            }
          }
        `}
      </style>
    </>
  );
}
