import Link from "next/link";
import loginStyles from "../styles/Login.module.css";
import { breakpoint } from "../styles/theme";

export default function Logeo({ children, name,pad=0}) {
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
            @media (max-width:500px){
                div{
                height:90vh;
            }
            }
            main {
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
                height: 100%;
                width: 100%;
                align-items: center;
            }
            main  h1{  
            font-size: 25px;
            font-family: 'roboto';
            margin-top: 50px;
            margin-bottom:${pad};
            color: #e71d36;
            text-align: center;
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
