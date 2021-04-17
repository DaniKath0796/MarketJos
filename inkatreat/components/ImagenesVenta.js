import Image from "next/Image";
import Button from "./Buttom";
import ContainerStore from "./items/ContainerStore";
import Rating from "./Rating";
import Valoracion from "./Valoracion";
import Header from "./Header";
import Heart from "./Svg/HeatSvg";
import ImagenItem from "./items/ImagenItem";
import { useState } from "react";

export default function Imagenstore({
  nombreTienda,
  name,
  imagenes,
  precio,
  descripcion,
}) {
  const [heart, setHeart] = useState(null);
  return (
    <>
      <Header nombre={nombreTienda} />
      <ContainerStore>
        <div className="container1">
          <div className="carrusel">
            {imagenes.map((imagen) => (
              <ImagenItem imagen={imagen} />
            ))}
          </div>
          <div className="foto">
            <Image
              src={imagenes[0]}
              alt="Picture of the author"
              width={325}
              height={325}
            />
          </div>
        </div>

        <div className="container2">
          <div className="titulo">{name}</div>
          <Valoracion valor={5} />
          <div className="precio">S/. {precio}</div>
          <div className="descripcion">{descripcion}</div>
          <Button>
            <Heart width={20} /> Lo quiero{" "}
          </Button>
        </div>

        <div className="container3">
          <label for="comment">Danos tu opinion acerca de este producto:</label>
          <input
            type="text"
            id="comment"
            name="comment"
            required
            className="coment"
          />
          <Rating />

          <div className="botones">
            <Button> Enviar </Button>
          </div>
        </div>
      </ContainerStore>

      <style jsx>
        {`

        input[type='radio']{
        display:none;
    }
    .star{
        cursor:pointer;
        transition:color 200ms;
        float:left;
    }
        input{
            color:red;
        }
          .caja1,
          .caja2,
          .caja3,
          .caja4,
          .caja5 {
           /* background-color: red;*/
            height: 50px;
            width: 50px;
            margin: 0 0;
            display: flex;
            border-bottom: 1px solid;
            border-top: 1px solid;
            border-left: 1px solid;
            border-right: 1px solid;
          }
          .carrusel {
            display: grid;
            grid-gap: 5px;
            margin: 0 20px;
            float: left;
          }
          .foto {
           /* background-color: orange;*/
            height: 325px;
            width: 325px;
            align-items: center;
            justify-content: center;
            position: relative;
            display: flex;
            
          }

          .container1 {
             background-color: #e9ecef;
              height: 365px;
              width: 435px;
              padding: 15px 5px;
              display: block;
            margin-left:auto;
            margin-right:auto;
            box-shadow: 0px 0px 5px .5px gray;
            
          }

          .container2 {
         /*background-color:tomato;*/
              height: 365px;
              width: 435px;
              padding: 15px 10px;
              padding-left:20px;
              display: block;
            margin-left:auto;
            margin-right:auto;
            color:#242525;
          }
          .container3 {
            /* background-color: gray;*/
              height: 300px;
              width: 400px;
              padding: 15px 10px;
              padding-left:20px;
              display: block;
              align-items: center;
              justify-content: center;
              text-align: center;
            margin-left:auto;
            margin-right:auto;
            color:#242525;
              
             
          }

          .coment {
            width:300px;
            height:100px;
            color:#242525;
            margin-top:10px;

          }

          .botones {
            margin-top:20px;
            margin-left:80px;

          }

          .titulo{
            /*  background-color: gray;*/
              text-align: left;
            font-size: 25px;
            
          }
         .precio{
            /* background-color:tomato;*/
            margin-top:30px; 
            margin-right:80px;
            text-align: left;
            

         }
         .stock{
         /*   background-color:tomato;*/
            text-align: left;
            font-size: 10px;
             margin-top:5px;
             font weight:200;
             font-family:'Arial';
         }
         .descripcion{
          /*background-color: #f5f3f4;*/
             height: 200px;
             margin:0 auto;
             text-align: left;
             font-family:'roboto';
             font-size:12.5px;
             font weight:normal;
            justify-content: center;
            padding-top: 10px;
            margin-bottom: 10px;
            
             
         }

          

        `}
      </style>
    </>
  );
}
