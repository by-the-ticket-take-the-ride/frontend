import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eventCardsData } from "./test-data/eventCardsData";
import ButtonLike from "../Buttons/ButtonLike/ButtonLike";
import useEventsContext from "../../hooks/useEventsContext";

function EventCard({ route, id, eventData  }) {
  const [isActive, setIsActive] = useState(false);
  const { name, image, date, location } = eventData;


  const handleLike = () => {
    setIsActive(!isActive);
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
              <span className="event-card__text">{date}</span>
            </div>
            <div className="event-card__info-column">
              <i className="event-card__icon event-card__icon_place"></i>
              <span className="event-card__text">{location}</span>
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
