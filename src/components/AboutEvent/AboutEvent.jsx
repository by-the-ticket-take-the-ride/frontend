import React, { useContext } from "react";
import HiddenText from "../HiddenText/HiddenText";
import ButtonToBuy from "../Buttons/ButtonToBuy/ButtonToBuy";
import useSeatContext from "../../hooks/useSeatContext";
import { EventsContext } from "../../constext/EventsContext";

function AboutEvent({ idEvent }) {
  const { isOpenPopap, setIsOpenPopap, handleGetCurrentEvent } =
    useSeatContext();
  const { currentEvent } = useContext(EventsContext);

  const handleClick = () => {
    handleGetCurrentEvent(idEvent);
    setIsOpenPopap(!isOpenPopap);
  };

  return (
    <section className="about-event">
      <div className="about-event__description">
        <h2 className="about-event__title">О концерте</h2>
        <p className="about-event__text">{currentEvent?.description}</p>
        <HiddenText
          text={currentEvent?.description}
          className="about-event__text"
        />
      </div>
      <ButtonToBuy handleClick={handleClick} text={"Купить билет"} />
    </section>
  );
}

export default AboutEvent;
