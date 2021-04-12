import Link from "next/link";
import loginStyles from "../styles/Login.module.css";
import { breakpoint } from "../styles/theme";

export default function VendedorRegistro({ children, name }) {
  return (
    <>
      <div className={loginStyles.login}>
        <main>
          <h1> {name}</h1>
          {children}
        </main>
      </div>
      <style jsx>
        {`
                
                    div {
                display: grid;
                height: 80vh;
                width: 100%;
                align: center;
                margin: 0 auto;                
                position: relative;
                place-items: center;
                z-index: 1;
                padding: 0;
                box-sizing: border-box;
                
            }
            main {
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
                height: 100%;
                width: 100%;
                padding: 0 10px;
            }

            main  h1{  
                font-size: 25px;    
            margin-top: 50px;
            margin-bottom:50px;
            color: #191919;
            text-align: center;
            }

}

                            @media (min-width:600px){
                            main{
                            height:100%;
                            max-width:${breakpoint.mobile};
                            }
                            div {

                                max-width:${breakpoint.mobile};
                            }
                            
                            `}
      </style>
    </>
  );
}
