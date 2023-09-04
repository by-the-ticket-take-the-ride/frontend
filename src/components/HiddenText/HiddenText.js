import React, { useState } from 'react';


function HiddenText({ text, className }) {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className='hidden-text'>
      <p className={className}>
        {isHidden ? text?.slice(0, text.length / 2) + "..." : text}
      </p>
      <button type='button' className='hidden-text__button' onClick={toggleHidden}>
        <span className='hidden-text__button-text'>{isHidden ? 'Раскрыть описание' : 'Скрыть описание'}</span>
      </button>
    </div>
  );
}

export default HiddenText;