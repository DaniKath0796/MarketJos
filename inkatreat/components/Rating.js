import { useState } from "react";
import StarSvg from "./Svg/star";
export default function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover]=useState(null);
  return (
      <>
    <div className='container'>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <div className="star">
            <StarSvg  width={20}
            fill={ratingValue<= (hover || rating) ? '#ffc107':'#e4e5e9'}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
             />
            </div>
          </label>
        );
      })}
      
          <h5>{rating}</h5>
      
    </div>
    
    <style jsx>
    {`
    
    .container{
      float:left;
      margin-left:36px;
    }
    input[type='radio']{
        display:none;
    }
    .star{
        cursor:pointer;
        transition:color 200ms;
        float:left;
    }
    h5{
        font-family:'roboto';
        margin:2px 10px;
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
