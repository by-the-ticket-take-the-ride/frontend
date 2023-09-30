import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonLike from "../Buttons/ButtonLike/ButtonLike";
import * as supportFunction from "../../utils/supportFunction";
import { addEventToFavorites, deleteEventToFavorites } from "../../utils/currentEventApi";
import useUserContext from "../../hooks/useUserContext";
import usePopupContext from "../../hooks/usePopupContext";
import { useContext } from "react";
import { EventsContext } from "../../constext/EventsContext";

function EventCard({ eventData }) {
  const {renderCard,setRenderCard} = useContext(EventsContext);
  // const [isActiveLike, setIsActiveLike] = useState();
  const isActiveLike = eventData.is_favorited;

  const {isLoggedIn} = useUserContext();
  const {setType} = usePopupContext();
  const { name, image, time_event, date_event, place, id } = eventData;
  
  useEffect(() => {
  }, [renderCard]);

  const handleLike = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (isLoggedIn) {

      if (!isActiveLike) {
        addEventToFavorites(id,token)
          .then(res => {
            // console.log(res);
          })
          .catch(err => console.log(err))
        setRenderCard(!renderCard);
      } else {
        deleteEventToFavorites(id, token)
          .then(res => console.log(res))
          .catch(err => console.log(err));
        setRenderCard(!renderCard);
      }
    } else {
      console.log('Вам надо авторизоваться');
      setType('login');
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
        isActive={isActiveLike}
      />
    </article>
  );
}

export default EventCard;
