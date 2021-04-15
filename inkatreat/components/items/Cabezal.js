export default function Cabezal  ({ nombre = "Nombre de la tienda" }) {
  return (
    <>
      <div className="cabecera">
        <div className="titulo">
          <h1>{nombre}</h1>
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            color: #242525;
            font-size: 3rem;
          }
          .cabecera {
            padding: 0;
            height: 100%;
            width: 100%;
            align-items: center;
            place-items: center;
          }
          .titulo {
            padding: 5vh;
            margin: 0;
            width: 100%;
            height: 100px;
            line-height: 1.6;
            font-size: 3rem;
            text-align: center;
            margin-top: 70px;
            margin-bottom: 80px;
            background-color: cadetblue;
          }

          @media (max-width: 600px) {
  .titulo{
    max-width: 100%; 
  margin: 0 auto;
  margin-top: 70px;
border-radius: .1em; }


        `}
      </style>
    </>
  );
};


