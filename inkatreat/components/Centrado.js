export default function  Centrado ({children,name}){
    return(
        <>
        
        <div>
            {children}
        </div>
        <style jsx>{`
        div
    {
    display: grid;    
    place-items: center;
}` 
}

        </style>

</>
    )
}