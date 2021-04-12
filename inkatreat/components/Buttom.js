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
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 600;
            padding: 8px 24px;
            margin: 5px;
            transition: opacity 0.3s ease;
            width: 70%;
          }

          button:hover {
            opacity: 0.7;
          }

          button > :global(svg) {
            margin-right: 10px;
          }
        `}
      </style>
    </>
  );
}
