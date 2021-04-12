import Head from 'next/head'
import Logeo from '../components/Logeo'
import Button from '../components/Buttom'
import Centrado from '../components/Centrado'
import VendedorRegistro from '../components/VendedorRegistro'
import {useState} from 'react'
import valid from '../utils/validTienda'
import {PostData} from '../utils/fetchData'

export default function RegistroVendedor(){

  const initialState = { nombreTienda: '', nombreEncargado: '', email: '', password: '', cf_password: '', tipoTienda: '', celularContacto: '', direccion: ''}
  const [userData, setUserData] = useState(initialState)
  const { nombreTienda, nombreEncargado, email, password, cf_password, tipoTienda, celularContacto, direccion } = userData
  
  const handleChangeInput = e => {
      const {name, value} = e.target
      setUserData({...userData, [name]:value})
  }

  function selectNext(){
    var select = document.getElementById('tipoTienda');
    select.selectedIndex
    setUserData({...userData, ['tipoTienda']:select.value})
  }

  const handleSubmit = async e => {
      e.preventDefault()
      console.log(userData)
      const errMsg = valid(nombreTienda, nombreEncargado, email, password, cf_password, tipoTienda, celularContacto, direccion)
      if(errMsg) console.log(errMsg)
      const res = await PostData('auth/registroTienda', userData)
      if(res.err) console.log(res.err)
  }
  
    return(

        <>
        <Head>
        <title>Registro vendedor</title>
        <link rel="icon" href="/favicon.ico" />
        
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <VendedorRegistro name="Registro vendedor">
          <div className='wrapper'>
              
          
              <div className='form'>
                  <div className='input-field'>
                      <label> Nombre de tienda</label>
                      <input type='text' className='input' 
                      name="nombreTienda" value={nombreTienda} onChange={handleChangeInput}/>
                  </div>
                  <div className='input-field'>
                      <label> Nombre de Encargado</label>
                      <input type='text' className='input' 
                      name="nombreEncargado" value={nombreEncargado} onChange={handleChangeInput}/>
                  </div>
          
                  <div className='input-field'>
                      <label> Contraseña</label>
                      <input type='password' className='input' 
                      name="password" value={password} onChange={handleChangeInput}/>
                  </div>
                  <div className='input-field'>
                      <label> Confirmar contraseña</label>
                      <input type='password' className='input' 
                      name="cf_password" value={cf_password} onChange={handleChangeInput}/>
                  </div>
          
                  <div className='input-field'>
                      <label> Tipo de tienda</label>
                      <div className='custom-select'>
                          <select id='tipoTienda' onChange={selectNext}>
                              <option value='Seleccionar'>Seleccionar </option>
                              <option value='Tienda Fisica'>Tienda Fisica </option>
                              <option value='Tienda Hogar'>Tienda Hogar </option>
          
                          </select>
                      </div>
                  </div>
                  <div className='input-field'>
                      <label> Email de la tienda</label>
                      <input type='email' className='input'
                      name="email" value={email} onChange={handleChangeInput}/>
                  </div>
                  <div className='input-field'>
                      <label> Numero telefonico de contacto</label>
                      <input type='text' className='input'
                      name="celularContacto" value={celularContacto} onChange={handleChangeInput}/>
                  </div>
                  <div className='input-field'>
                      <label> Dirección</label>
                      <input type='text' className='input'
                      name="direccion" value={direccion} onChange={handleChangeInput}/>
                  </div>
                  <Centrado>
                      <div className='input-field terms'>
                          <label className='check'>
                          <input type='checkbox'/>
                          <span className='checkmark'></span>
                          </label>
                          <p> Acepto los terminos y condiciones del sitio</p>
                      </div>
                      <div className='input-field'>
                          <Button onClick={handleSubmit}> Registro</Button>
                      </div>
                  </Centrado>
              </div>
          </div>
      </VendedorRegistro>

      <style jsx>{`


.wrapper .form{
  width: 100%;
}

.wrapper .form .input-field{
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.wrapper .form .input-field label{
   width: 200px;
   color: #757575;
   margin-right: 10px;
  font-size: 14px;
}

.wrapper .form .input-field .input,
.wrapper .form .input-field .textarea{
  width: 100%;
  outline: none;
  border: 1px solid #d5dbd9;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.wrapper .form .input-field .textarea{
  width: 100%;
  height: 125px;
  resize: none;
}

.wrapper .form .input-field .custom-select{
  position: relative;
  width: 100%;
  height: 37px;
}

.wrapper .form .input-field .custom-select:before{
  content: "";
  position: absolute;
  top: 12px;
  right: 10px;
  border: 8px solid;
  border-color: #d5dbd9 transparent transparent transparent;
  pointer-events: none;
}

.wrapper .form .input-field .custom-select select{
  -webkit-appearance: none;
  -moz-appearance:   none;
  appearance:        none;
  outline: none;
  width: 100%;
  height: 100%;
  border: 0px;
  padding: 8px 10px;
  font-size: 15px;
  border: 1px solid #d5dbd9;
  border-radius: 3px;
}


.wrapper .form .input-field .input:focus,
.wrapper .form .input-field .textarea:focus,
.wrapper .form .input-field .custom-select select:focus{
  border: 1px solid #242525;
}

.wrapper .form .input-field p{
   font-size: 14px;
   color: #757575;
}
.wrapper .form .input-field .check{
  width: 15px;
  height: 15px;
  position: relative;
  display: block;
  cursor: pointer;
}
.wrapper .form .input-field .check input[type="checkbox"]{
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.wrapper .form .input-field .check .checkmark{
  width: 15px;
  height: 15px;
  border: 1px solid #242525;
  display: block;
  position: relative;
}
.wrapper .form .input-field .check .checkmark:before{
  content: "";
  position: absolute;
  top: 1px;
  left: 2px;
  width: 5px;
  height: 2px;
  border: 2px solid;
  border-color: transparent transparent #fff #fff;
  transform: rotate(-45deg);
  display: none;
}
.wrapper .form .input-field .check input[type="checkbox"]:checked ~ .checkmark{
  background: #242525;
}

.wrapper .form .input-field .check input[type="checkbox"]:checked ~ .checkmark:before{
  display: block;
}

.wrapper .form .input-field .btn{
  width: 100%;
   padding: 8px 10px;
  font-size: 15px; 
  border: 0px;
  background:  #242525;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
}

.wrapper .form .input-field .btn:hover{
  background: #242525;
}

.wrapper .form .input-field:last-child{
  margin-bottom: 0;
}

@media (max-width:420px) {
  .wrapper .form .input-field{
    flex-direction: column;
    align-items: flex-start;
  }
  .wrapper .form .input-field label{
    margin-bottom: 5px;
  }
  .wrapper .form .input-field.terms{
    flex-direction: row;
  }
}
      `}
      
      </style>
        </>
    )
}