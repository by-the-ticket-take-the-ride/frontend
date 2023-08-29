import React, { useState } from "react";
import { eventCardsData } from '../../assets/test-data/eventCardsData';
import HiddenText from '../HiddenText/HiddenText';
import ButtonToBuy from "../Buttons/ButtonToBuy/ButtonToBuy";
import useSeatContext from "../../hooks/useSeatContext";


function AboutEvent() {
  // const [isOpen, setIsOpen] = useState(false)
  const {isOpenPopap, setIsOpenPopap} = useSeatContext();

    const {subtitle, text } = eventCardsData[0];
    const handleClick = () => {
      setIsOpenPopap(!isOpenPopap)
    }
    

    return(
        <section className="about-event">
            <div className="about-event__description">
                <h2 className="about-event__title">О концерте</h2>
                <p className="about-event__text">{subtitle}</p>
                <HiddenText text={text} className="about-event__text"/>
            </div>
            <ButtonToBuy handleClick={handleClick} text={"Купить билет"} />
        </section>
    )
}

export default AboutEvent;