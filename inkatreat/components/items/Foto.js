import Image from "next/image";
export default function Foto({ nombreProducto, imagen }) {
  return (
    <>
      <div className="container">
        <div className="card-imagen">
          <Image
            src={imagen}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
        <div className="details">
          <h2>{nombreProducto}</h2>
        </div>
      </div>
      <style jsx>
        {`
          .card-imagen {
            position: relative;
            padding: 0 10px;
            margin: 0 auto;
            box-sizing: border-box;
          }
          .card-imagen:active,
          .card-imagen:hover,
          .card-imagen:focus {
            outline: none;
            border: none;
          }
          .container {
            height: 250px;
            width: 250px;
            padding: 15px 10px;
            display: block;
            margin-top: 2px;
            margin-bottom: 2px;
            box-shadow: 0px 0px 5px 0.5px gray;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            background-color: #f6f7f9;
          }
        `}
      </style>
    </>
  );
}
