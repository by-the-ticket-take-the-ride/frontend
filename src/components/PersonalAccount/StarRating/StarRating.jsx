import { useEffect, useState } from 'react';
import './StarRating.css';

import starOff from '../../../assets/images/Star.svg';
import starOn from '../../../assets/images/Star.svg';

function StarRating() {

  const [rating, setRating ] = useState(0);
  const [hover, setHover ] = useState(0);
  const [inputValues, setInputValues] = useState(null);
  const handleStoreValue = (name, value) => {
    setInputValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

// рейтинг вина
const handleReiting = (rating) => {
  const name = 'rating';
  handleStoreValue(name, rating);
};

  useEffect(() => {
    console.log(rating);
    handleReiting(rating)
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