import './EventCard.css';
import { useState } from 'react';
import { eventCardsData } from './test-data/eventCardsData'
import ButtonLike from '../Buttons/ButtonLike';

function EventCard() {
  const [isActive, setIsActive] = useState(false)
  const { name, image, date, location } = eventCardsData[0];

  const handleLike = () => {
    setIsActive(!isActive)
  }

  return ( 
      <article className="event-card">
        <a href="#" target='_blank' rel="noreferrer">
          <div className='event-card__img-wrapper'>
            <img className='event-card__image' src={image} alt={name} />
          </div>
          <div className='event-card__info'>
            <h2 className='event-card__title'>{name}</h2>
            <div className='event-card__info-columns'>
              <div className='event-card__info-column'>
                <i className='event-card__icon event-card__icon_time' ></i>
                <span className='event-card__text'>{date}</span>
              </div>
              <div className='event-card__info-column'>
                <i className='event-card__icon event-card__icon_place'></i>
                <span className='event-card__text'>{location}</span>
              </div>
            </div>
          </div>
        </a>
        <ButtonLike extraClass='event-card__button-like' handleLike={handleLike} isActive={isActive}/>
      </article>
   );
}

export default EventCard;