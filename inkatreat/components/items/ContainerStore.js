export default function ContainerStore({ children}){
    return(
    <>
        <div className='container'>
            {children}
        </div>
            <style jsx>
            {`
            .container{
                display:grid;
                width:90%;
                margin:0 auto;
                grid-gap:10px;
                grid-template-columns: repeat(3,.5fr);
    
            }
    
            
                }    
             @media (max-width:1000px){
                    .container{
                        grid-template-columns: repeat(2,.5fr);
                }
            @media (max-width:700px){
                    .container{
                        grid-template-columns: repeat(1,1fr);
                }
    
               
            `}
        
            </style>
        
    </>
    )
    }