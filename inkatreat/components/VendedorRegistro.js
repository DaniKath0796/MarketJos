import Link from "next/link";
import loginStyles from "../styles/Login.module.css";
import { breakpoint } from "../styles/theme";

export default function VendedorRegistro({ children, name }) {
  return (
    <>
      <div >
        <main>
          <h1> {name}</h1>
          {children}
        </main>
      </div>
      <style jsx>
        {`
                
                    div {
                display: grid;
                height: 80%;
                width: 100%;
                align: center;
                margin: 0 auto;                
                position: relative;
                place-items: center;
                align-items: center;
                text-align: center;
                z-index: 1;
                
            }
            main {
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
                height: 80%;
                width: 100%;
                padding: 0 10px;
                margin-bottom: 50px;
            }

            main  h1{  
              font-family:'Roboto';
                font-size: 25px;    
            margin-top: 50px;
            margin-bottom:50px;
            color: #2ec4b6;
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
