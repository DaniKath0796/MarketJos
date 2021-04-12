import Foto from "./Foto";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
export default function Carrusel({ imagenes }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><Foto /></Item>
          <Item><Foto /></Item>
          <Item><Foto /></Item>
          <Item><Foto /></Item>
          <Item><Foto /></Item>
          <Item><Foto /></Item>
          <Item><Foto /></Item>
          <Item><Foto /></Item>
         
        </Carousel>
      </div>
      <style jsx>
        {`
          div {
            display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      margin-top: 15px;
      height: 280px;
      width: 90%;
      font-size: 10px;
          }
          .App {
            font-family: sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 300px;
          }


        `}
      </style>
    </>
  );
}
