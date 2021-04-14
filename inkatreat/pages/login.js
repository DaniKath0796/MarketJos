import next from "next";
import Link from "next/link";
import Head from "next/head";
import Logeo from "../components/Logeo";
import Button from "../components/Buttom";
import Centrado from "../components/Centrado";
import GoogleSvg from "../components/Svg/GoogleSvg";
import { useContext, useState, useEffect } from "react";
import { PostData } from "../utils/fetchData";
import Cookie from "js-cookie";
import { DataContext } from "../store/GlobalState";
import { useRouter } from "next/router";
import ShopSvg from "../components/Svg/ShopSvg";


export default function Login() {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const errMsg = valid(nombreUsuario, email, password, cf_password)
    //if(errMsg) console.log(errMsg)
    const res = await PostData("auth/loginCliente", userData);
    console.log(res);
    if (res.err) console.log(res.err);

    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookie.set("refreshtoken", res.refresh_token, {
      path: "api/auth/accessTokenCliente",
      expires: 7,
    });
    localStorage.setItem("firstLogin", true);
  };

  /*useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);*/

  return (
    <>
      <Head>
        <title>Inicia sesion</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Logeo name="Inicia Sesión">
        <section>
        <div className="imag">
            <ShopSvg width={100} height={100} fill="#e71d36" />
          </div>
          <div className="form">
            <div className="input-field">
              <label> Correo electronico</label>
              <input
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
                type="password"
                className="input"
                name="password"
                value={password}
                onChange={handleChangeInput}
                required={true}
              />
            </div>
          </div>

          <p>
            No tienes cuenta aun? 
            <Link href="/registro">
              <a>   Registrate</a>
            </Link>
          </p>

          <Centrado>
            <Button color='#e71d36' onClick={handleSubmit}>Ingresa</Button>

          </Centrado>
        </section>
      </Logeo>
      <style jsx>
        {`
          p {
            color: gray;
          }
          a {
            color: #e71d36;
          }
          .imag {
            margin: 0 auto;
            padding-top:0;
          }
          .form {
            width: 100%;
            padding-top: 2vh;
            margin-top: 0px;
            margin-bottom: 0px;
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
            border: 0.1px solid #e71d36;
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
              margin-top: 20px;
            }
          }
        `}
      </style>
    </>
  );
}
