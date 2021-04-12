export default function Container({ children }){
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
            grid-template-columns: repeat(5,1fr);

        }

        @media (max-width:1300px){
                .container{
                    grid-template-columns: repeat(4,1fr);
            }    

        @media (max-width:1100px){
                .container{
                    grid-template-columns: repeat(3,1fr);
            }    
         @media (max-width:800px){
                .container{
                    grid-template-columns: repeat(2,1fr);
            }
        @media (max-width:600px){
                .container{
                    grid-template-columns: repeat(1,1fr);
            }

           
        `}
    
        </style>
    
</>
)
}