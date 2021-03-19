import next from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Logeo from '../components/Logeo'
import Button from '../components/Buttom'
import Centrado from '../components/Centrado'
import GoogleSvg from '../components/Svg/GoogleSvg'

export default function Login() {
    return(
    <>
 <Head>
        <title>Inicia sesion</title>
        <link rel="icon" href="/favicon.ico" />
        
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Logeo name="Inicia Sesión"> 
      <section>
            
            <img src='/okay.png' alt='Logo'></img>
            
         
            <div className='form'>
                <div className='input-field'>
                          <label> Correo electronico</label>
                          <input type='email' className='input'/>
                      </div>
                <div className='input-field'>
                          <label> Contraseña</label>
                          <input type='password' className='input' />
                      </div>
                      <div className='input-field'>
                          <label> Confirmar contraseña</label>
                          <input type='password' className='input' />
                      </div>
            </div>

            <p> Ya cuentas con una cuenta? <Link href='/login'><a>Identifícate</a></Link></p>

            <Centrado>
                <Button>Regístrate</Button>
                
                
                <Button> <GoogleSvg width={25} height={25}/>Regístrate con google </Button>
            </Centrado>
            </section>
            
            </Logeo>        
            <style jsx> {`
                    a{
                        color:tomato;
                    }
                    .form{
                        width: 100%;
                        padding-top: 20vh;
                        margin-top:30px;
                        margin-bottom:20px;
                    }

                    .form .input-field{
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    }

                    .form .input-field label{
                    width: 200px;
                    color: #757575;
                    margin-right: 10px;
                    font-size: 14px;
                    }

                    .form .input-field .input
                    {
                    width: 100%;
                    outline: none;
                    border: 1px solid #d5dbd9;
                    font-size: 15px;
                    padding: 8px 10px;
                    border-radius: 3px;
                    transition: all 0.3s ease;
                    }
                    
                    .form .input-field .input:focus
                    {
                    border: .1px solid #fec107;
                    }

                    img{
                        width: 10rem;
                        position: absolute;
                        margin-bottom:30vh;

                    }

                    section{
                        display:grid;
                        height:50vh;
                        place-content: center;
                        place-item: center
                    }
                    h2{
                        margin-bottom:15px
                    }

                
                            `}
                    </style>



        </>
        
        
        
        )
}
