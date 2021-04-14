import Link from "next/Link";
import Image from "next/Image";
import StoreSvg from "../Svg/store";
export default function StoreItem({ ima, nombre, categoria, color }) {
  return (
    //para las imagenes de los logos hay que poner la restriccion de que sea una imaden cuadrada
    <>
      <div className="prueba">
        <div className="redirect">
          <Link href="/pruebaStore">
            <a></a>
          </Link>
        </div>
        <div className="container">
          <div className="header">
            <div className="ima">
              <Image
                src={ima}
                alt="Picture of the author"
                width={100}
                height={70}
              />
            </div>
            <div className="card">
              <StoreSvg width={250} fill={color}></StoreSvg>
            </div>

            <h3>{nombre}</h3>
            <h6>{categoria}</h6>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          a {
            position: absolute;
            height: 280px;
            width: 270px;
            z-index: 1000;
          }
          .prueba {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 15px;
            background-color: white;
            border-radius: 15px;
          }
          .prueba:hover {
            box-shadow: 0px 0px 20px 0.1px gray;
          }
          .container {
            align-items: center;
            justify-content: center;
            display: flex;
            width: 250px;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            background: #f6f7f9;
            padding: 8px 0;
            float: left;
            margin: 10px 10px;
            background-color: white;
          }
          .header {
            text-align: center;
            margin: 0 auto;

            align-items: center;
            z-index: 10;
            background-color: white;
          }

          .card {
            position: relative;
            padding: 0 20;
            align-items: center;
            justify-content: center;
          }
          .ima {
            position: absolute;
            background-size: cover;
            justify-content: center;
            align-items: center;
            display: flex;
            margin: 70px 25px;
            height: 135px;
            width: 200px;
            background-color: white;
          }

          a,
          h6 {
            margin: 0;
            padding: 0;
            color: #242525;
            font-family: "roboto";
            cursor: pointer;
          }
          h3 {
            font-family: "roboto";
          }
        `}
      </style>
    </>
  );
}
