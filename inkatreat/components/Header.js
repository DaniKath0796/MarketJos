import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={headerStyles.titulo}>
        <h1>
          Inka<span>treat</span>
        </h1>
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
