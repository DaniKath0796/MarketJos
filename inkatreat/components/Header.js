import headerStyles from "../styles/Header.module.css";

const Header = ({ nombre = "Nombre de la tienda" }) => {
  return (
    <>
      <div className={headerStyles.titulo}>
        <h1>{nombre}</h1>
      </div>

      <style jsx>
        {`
          div {
            padding: 0;
            height: 100%;
            width: 100%;
            align-items: center;
            place-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Header;
