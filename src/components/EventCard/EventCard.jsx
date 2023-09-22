import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonLike from "../Buttons/ButtonLike/ButtonLike";
import * as supportFunction from "../../utils/supportFunction";
import useUserContext from "../../hooks/useUserContext";

function EventCard({ eventData }) {
  const [isActive, setIsActive] = useState(false);
  const { name, image, time_event, date_event, place, id } = eventData;
  const {isLoggedIn} = useUserContext();
  
  const handleLike = () => {
    if (isLoggedIn) {
      setIsActive(!isActive);
    } else {
      console.log('Вам надо авторизоваться');
    }
    
  };
  return (
    <article className="event-card">
      <Link to={`/event/${id}`}>
        <div className="event-card__img-wrapper">
          <img className="event-card__image" src={image} alt={name} />
        </div>
        <div className="event-card__info">
          <h2 className="event-card__title">{name}</h2>
          <div className="event-card__info-columns">
            <div className="event-card__info-column">
              <i className="event-card__icon event-card__icon_time"></i>
              <span className="event-card__text">
                {supportFunction.renderDate(date_event)},{" "}
                {supportFunction.renderTime(time_event)}
              </span>
            </div>
            <div className="event-card__info-column">
              <i className="event-card__icon event-card__icon_place"></i>
              <span className="event-card__text">{place.name}</span>
            </div>
          </div>
        </div>
      </Link>
      <ButtonLike
        extraClass="event-card__button-like"
        handleLike={handleLike}
        isActive={isActive}
      />
    </article>
  );
}

export default EventCard;
