export default function Buttom({ children, onClick, color = "#242525" }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>
        {`
          button {
            align-items: center;
            justify-content: center;
            background: ${color};
            border: 0;
            color: #fff;
            cursor: pointer;
            display: flex;
            font-family:'Roboto';
            border-radius: 5px;
            font-size: 15px;
            font-weight: 600;
            padding: 8px 24px;
            margin: 5px;
            transition: opacity 0.3s ease;
            width: 70%;
          }

          button:hover {
            opacity: 0.9;
            box-shadow: 0px 0px 15px 0.1px #d6d6d6;
          }

          button > :global(svg) {
            margin-right: 10px;
          }
        `}
      </style>
    </>
  );
}
