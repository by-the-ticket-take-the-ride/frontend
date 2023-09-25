import React, { useState, useEffect } from 'react';
import Month from '../Month/Month';
import moment from 'moment';
import 'moment/locale/ru';
import arrow_left from '../../assets/images/icon-arrow-left.svg';
import arrow_right from '../../assets/images/icon-arrow-right.svg';
import { eventCardsData } from '../EventCard/test-data/eventCardsData';

function Calendar({ handleSelectedDateChange }) {
  const defaultProps = {
    weekDays: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  }

  const {weekDays, months} = defaultProps;

    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const currentDate = moment();
  const currentDay = currentDate.date();

  const currentWeekdayIndex = currentDate.day();

  const monthsToShow = 12;

  const [selectedDay, setSelectedDay] = useState({});

  const [visibleDays, setVisibleDays] = useState(11);

  const handleDayClick = (monthIndex, day) => {
    setSelectedDay(() => ({
      [monthIndex]: day,
    }));

    const selectedDate = moment().add(monthIndex, 'months').date(day);

    const eventsForSelectedDate = eventCardsData.filter(event => {
      const eventDate = moment(event.date, 'D MMMM, HH:mm');
      return eventDate.isSame(selectedDate, 'day');
    });
    
    localStorage.setItem('selectedDate', JSON.stringify({ monthIndex, day }));
    localStorage.setItem('eventsForSelectedDate', JSON.stringify(eventsForSelectedDate));
    localStorage.setItem('visibleDays', visibleDays);

    handleSelectedDateChange(eventsForSelectedDate);
  };

  useEffect(() => {
    const savedSelectedDate = localStorage.getItem('selectedDate');
    const savedVisibleDays = localStorage.getItem('visibleDays');

    if (savedSelectedDate) {
      const { monthIndex, day } = JSON.parse(savedSelectedDate);
      setSelectedDay({ [monthIndex]: day });

      const eventsForSelectedDate = JSON.parse(localStorage.getItem('eventsForSelectedDate'));
      handleSelectedDateChange(eventsForSelectedDate);
    }

    if (savedVisibleDays) {
      setVisibleDays(parseInt(savedVisibleDays));
    }
  }, []);

  const handleNextClick = () => {
    const newVisibleDays = (prev => prev + 11);
    setVisibleDays(newVisibleDays);
  };
  
  const handlePrevClick = () => {
    const newVisibleDays = (prev => prev - 11);
    setVisibleDays(newVisibleDays);
  };

  const calendar = [];

  for (let i = 0; i < monthsToShow; i++) {
    const monthInfo = currentDate.clone().add(i, 'months');
    const isCurrentMonth = i === 0;
    const daysToShow = isCurrentMonth
      ? Array.from({ length: monthInfo.daysInMonth() - (currentDay - 1) }, (_, index) => index + currentDay)
      : Array.from({ length: monthInfo.daysInMonth() }, (_, index) => index + 1);

    calendar.push(
        <Month
        key={i}
        monthIndex={i}
        monthName={months[i]}
        daysToShow={daysToShow}
        selectedDay={selectedDay[i]}
        handleDayClick={handleDayClick}
        weekDays={weekDays}
        currentWeekdayIndex={currentWeekdayIndex}
      />
    );
  }

  return (
    <div className="calendar">
      <div className={`arrow ${visibleDays > 11 ? "arrow-left" : ""}`}>
        <img className={`arrow-btn arrow-left-btn ${visibleDays > 11 ? "" : "disabled"}`} src={arrow_left} alt='Стрелка влево' onClick={visibleDays > 11 ? handlePrevClick : null}/>
      </div>
      <div className="calendar__container">
        <div className="dates-visible" style={{ transform: `translateX(-${(visibleDays - 11) * 47.5}px)` }}>          
        {calendar}
        </div>
      </div>
      <div className={`arrow ${currentMonthIndex + (visibleDays / 30) < monthsToShow - 1 ? "arrow-right" : ""}`}>
        <img className={`arrow-btn arrow-right-btn ${currentMonthIndex + (visibleDays / 30) < monthsToShow - 1 ? "" : "disabled"}`} src={arrow_right} alt='Стрелка вправо' onClick={currentMonthIndex + (visibleDays / 30) < monthsToShow - 1 ? handleNextClick : null}/>
      </div>
    </div>
  );
}

export default Calendar;