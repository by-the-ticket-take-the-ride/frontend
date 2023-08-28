import { useState } from 'react';
import { eventCardsData } from '../../assets/test-data/eventCardsData';
import ButtonLike from '../Buttons/ButtonLike/ButtonLike';
import ButtonShare from '../Buttons/ButtonShare/ButtonShare';

function MainFrame() {

  const { name, image, date, location, type, tag } = eventCardsData[0];
  const [isActive, setIsActive] = useState(false);

  const handleLike = () => {
    setIsActive(!isActive)
  }

  return (
    <section className="main-frame">
      <div className="main-frame__img-wrapper">
        <img className="main-frame__img" src={image} alt={name} />
      </div>
      <div className="main-frame__container">
        <div className="main-frame__buttons">
          <div className="main-frame__button-share">
            <ButtonShare />
            <span className="main-frame__button-title">Поделиться</span>
          </div>
          <div className="main-frame__button-like">
            <ButtonLike handleLike={handleLike} isActive={isActive} />
            <span className='main-frame__button-title'>Избранное</span>
          </div>
        </div>
        <div className="main-frame__info">
          <ul className="main-frame__tags-info">
            <li className="main-frame__type">{type}</li>
            <li className="main-frame__tag">{tag}</li>
          </ul>
          <h1 className="main-frame__title">{name}</h1>
          <div className="main-frame__date main-frame__event-info">
            <i className="main-frame__icon main-frame__icon_date"></i>
            <span className="main-frame__date-title">{date}</span>
          </div>
          <div className="main-frame__location main-frame__event-info">
            <i className="main-frame__icon main-frame__icon-location"></i>
            <span className="main-frame__location-title">{location}</span>
          </div>
        </div>
      </div>
    </section >
  )
}

export default MainFrame;