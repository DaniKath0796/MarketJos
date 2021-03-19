export default function Buttom({children, onClick,color='#307e11'}){

    return(
        <>
            <button onClick={onClick}>
            {children}
            </button>
            <style jsx>{`
            button{
                align-items: center;
                justify-content: center;
                background:${color};
                border:0;
                color:#fff;
                cursor:pointer;
                display:flex;
                border-radius:9999px;
                font-size:16px;
                font-weight:600;
                padding:8px 24px;
                margin:10px;
                transition: opacity .3s ease;
                width:70%;

            }

            button:hover{
                opacity:.7;

            }

            button > :global(svg){
                margin-right:10px
            }
            `}
            
            </style>
            
        </>

    )
}