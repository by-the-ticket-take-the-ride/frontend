import Button from "../Buttons/Button/Button";
import React from "react";
import EventCard from "../EventCard/EventCard";
import "./EventCards.css";
import { eventCardsData } from "../EventCard/test-data/eventCardsData";
import eventCardsButtonData from "./eventCardsButtonData.json";

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
          {eventCardsData.map((item) => (
            <EventCard key={item.id} />
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
