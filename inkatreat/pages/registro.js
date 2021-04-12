import next from "next";
import Link from "next/link";
import Head from "next/head";
import Logeo from "../components/Logeo";
import Button from "../components/Buttom";
import Centrado from "../components/Centrado";
import GoogleSvg from "../components/Svg/GoogleSvg";
import { useContext, useState } from "react";
import valid from "../utils/validCliente";
import { PostData } from "../utils/fetchData";
import { DataContext } from "../store/GlobalState";

export default function Register() {
  const initialState = {
    nombreUsuario: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { nombreUsuario, email, password, cf_password } = userData;

  const { state, dispatch } = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(nombreUsuario, email, password, cf_password);
    if (errMsg) console.log(errMsg);
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await PostData("auth/registroCliente", userData);
    if (res.err) console.log(res.err);
  };

  return (
    <>
      <Head>
        <title>Registrate</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Logeo name="Registrate">
        <section>

          <div className="form">
            <div></div>

            <div className="input-field">
              <label> Nombre</label>
              <input
                type="text"
                className="input"
                name="nombreUsuario"
                value={nombreUsuario}
                onChange={handleChangeInput}
              />
            </div>
            <div className="input-field">
              <label> Correo electronico</label>
              <input
              required
                type="email"
                className="input"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div className="input-field">
              <label> Contraseña</label>
              <input
              required
                type="password"
                className="input"
                name="password"
                value={password}
                onChange={handleChangeInput}
              />
            </div>
            <div className="input-field">
              <label> Confirmar contraseña</label>
              <input
              required
                type="password"
                className="input"
                name="cf_password"
                value={cf_password}
                onChange={handleChangeInput}
              />
            </div>
          </div>

          <p>
            Ya cuentas con una cuenta?
            <Link href="/login">
              <a>Identifícate</a>
            </Link>
          </p>

          <Centrado>
            <Button onClick={handleSubmit}>Regístrate</Button>

            <Button>
              <GoogleSvg width={25} height={25} />
              Regístrate con google
            </Button>
          </Centrado>
        </section>
 
      </Logeo>

  
      <style jsx>
        {`
          p {
            color: gray;
          }
          a {
            color: tomato;
          }
          .form {
            width: 100%;
            padding-top: 20vh;
            margin-top: 30px;
            margin-bottom: 20px;
          }

          .form .input-field {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
          }

          .form .input-field label {
            width: 200px;
            color: #757575;
            margin-right: 10px;
            font-size: 14px;
          }

          .form .input-field .input {
            width: 100%;
            outline: none;
            border: 1px solid #d5dbd9;
            font-size: 15px;
            padding: 8px 10px;
            border-radius: 3px;
            transition: all 0.3s ease;
          }

          .form .input-field .input:focus {
            border: 0.1px solid #242525;
          }

          
          section {
            display: grid;
            height: 50vh;
            place-content: center;
            place-item: center;
          }
          h2 {
            margin-bottom: 15px;
          }

          @media (max-width: 420px) {
            img {
              display: none;
            }

            .form {
              width: 100%;
              margin: 0;
              padding: 0;
              margin-top: 40px;
            }
          }
        `}
      </style>
    </>
  );
}
