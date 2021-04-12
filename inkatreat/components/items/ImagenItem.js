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
            border-bottom: 1px solid;
            border-top: 1px solid;
            border-left: 1px solid;
            border-right: 1px solid;
          }

        `}
        </style>
            </>
            )
}