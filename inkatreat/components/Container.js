export default function Container({ children, divisiones=5 }){
return(
<>
    <div className='container'>
        {children}
    </div>
        <style jsx>
        {`
        .container{
            display:grid;
            grid-gap:10px;
            grid-template-columns: repeat(${divisiones},1fr);

        }

        @media (max-width:1200px){
                .container{
                    grid-template-columns: repeat(4,1fr);
            }    

        @media (max-width:900px){
                .container{
                    grid-template-columns: repeat(3,1fr);
            }    
         @media (max-width:600px){
                .container{
                    grid-template-columns: repeat(2,1fr);
            }
        @media (max-width:500px){
                .container{
                    grid-template-columns: repeat(1,1fr);
            }

           
        `}
    
        </style>
    
</>
)
}