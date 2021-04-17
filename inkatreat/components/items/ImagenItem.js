import Image from 'next/image'
export default function ImagenItem({imagen}){
    const width = 50;
    return(
       
       <>
       <div className="caja">
            <Image
              src={imagen}
              alt="Picture of the author"
              width={width}
              height={width}
            />
            </div>

        <style jsx>
        {`
        .caja {
           /* background-color: red;*/
            height: 50px;
            width: 50px;
            margin: 0 0;
            display: flex;
            
            cursor: pointer;          }
          .caja:hover{
            box-shadow: 0px 0px 5px .5px gray;
          }

        `}
        </style>
            </>
            )
}