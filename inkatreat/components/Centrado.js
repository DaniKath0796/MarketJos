export default function Centrado({ children, name }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          div {
            display: grid;
            place-items: center;
            margin-top: 10px;
            padding-bottom: 20px;
          }
        `}
      </style>
    </>
  );
}
