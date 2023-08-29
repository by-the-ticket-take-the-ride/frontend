import Button from "../Buttons/Button/Button";
import React, { useEffect, useLayoutEffect } from "react";
import EventCard from "../EventCard/EventCard";
import { eventCardsData } from "../EventCard/test-data/eventCardsData";
import eventCardsButtonData from "./eventCardsButtonData.json";
// import * as EventApi from '../../utils/currentEventApi'

const EventCards = () => {
  const [buttonId, setButtonId] = React.useState(0);

  return (
    <section className="event-cards">
      <div className="event-cards__container">
        <h2 className="event-cards__title">Вам могут быть интересны</h2>
        <div className="event-cards__buttons">
          {eventCardsButtonData.map((item, index) => (
            <Button
              grayOutlined={true}
              additionalClass={`event-cards__buttons-button ${
                buttonId === index ? "event-cards__buttons-button_active" : ""
              }`}
              key={item.id}
              onClick={() => setButtonId(index)}
            >
              {item.title}
            </Button>
          ))}
        </div>
        <div className="event-cards__list">
          {eventCardsData.map((item, id) => (
            <EventCard route={'event'} id={id + 1} key={item.id} eventData={item}/>
          ))}
        </div>
        <Button primaryOutlined={true} additionalClass="event-cards__button">
          Показать еще
        </Button>
      </div>
    </section>
  );
};

export default EventCards;
