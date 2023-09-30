import { useEffect, useState } from 'react';
import './StarRating.css';

import starOff from '../../../assets/images/rating-star-disabled.svg';
import starOn from '../../../assets/images/rating-star-active.svg';

function StarRating({ handleRating }) {

  const [rating, setRating ] = useState(0);
  const [hover, setHover ] = useState(0);
  useEffect(() => {
    handleRating(rating)
  }, [rating])
  

  return (
    <div className='star-rating'>
      { [...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
        return (
          <label key={i}>
            <input 
              className='star-rating__input'
              onClick={() => setRating(ratingVal)}
              value={ratingVal}
              type="radio"
              name="rating"
            />
            <img
              className='star-rating__img'
              src={ratingVal > ( hover || rating ) ? starOff : starOn} 
              alt="звезда"
              onMouseEnter={() => setHover(ratingVal)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        )
      })
      }
    </div>
  );
}

export default StarRating;