import { useState } from "react";
import starOff from '../../../assets/images/rating-star-disabled.svg';
import starOn from '../../../assets/images/rating-star-active.svg';
import './StarRatingDisabled.css'

function StarRatingDisabled({rating = 0}) {
  // const [rating, setRating ] = useState(0);
  
  return (
    <div className='star-rating-disabled'>
      { [...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
        return (
            <img
              key={i}
              className='star-rating-disabled__img'
              src={ratingVal > rating  ? starOff : starOn} 
              alt="звезда"
              // onMouseEnter={() => setHover(ratingVal)}
              // onMouseLeave={() => setHover(0)}
            />

        )
      })
      }
    </div>
  );
}

export default StarRatingDisabled;