import { useState } from "react";
import StarSvg from "./Svg/star";
export default function Valoracion({valor}) {
  const [rating, setRating] = useState(valor);
  return (
      <>
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = valor;
        
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
            />
            <div className="star">
            <StarSvg  width={15}
            fill={ratingValue<= (rating) ? '#ffc107':'#e4e5e9'}
            
             />
            </div>
          </label>
        );
      })}
      
          <h5>{rating}</h5>
      
    </div>
    
    <style jsx>
    {`
    input[type='radio']{
        display:none;
    }
    .star{
        cursor:pointer;
        transition:color 200ms;
        float:left;
       /* background:white;*/
    }
    h5{
      font-family:'roboto';
        margin:3px 0px;
        height:20px;
        width:30px;
        color:gray;
        padding:0 0;
        float:left;
        text-align:center;
    }
    `}
    </style>
    </>
  );
}