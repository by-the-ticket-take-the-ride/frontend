import './Calendar.css';
import React, {useState} from 'react';
import Month from './Month/Month';
import moment from 'moment';
import 'moment/locale/ru';
import arrow_left from '../../assets/images/icon-arrow-left.svg';
import arrow_right from '../../assets/images/icon-arrow-right.svg';
import { eventCardsData } from '../EventCard/test-data/eventCardsData';
import EventsCardList from '../EventsCardList/EventsCardList';

function Calendar({handleSelectedDateChange}) {
  const defaultProps = {
    weekDays: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  }

  const {weekDays, months} = defaultProps;

    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const currentDate = moment();
  const currentYear = currentDate.year();
  const currentMonth = currentDate.month();
  const currentDay = currentDate.date();

  const currentDayIndex = currentDate.day();

  const monthsToShow = 12; // Количество месяцев для отображения

  const [selectedDay, setSelectedDay] = useState({});

  const handleDayClick = (monthIndex, day) => {
    setSelectedDay(() => ({
      // ...prevSelectedDays,
      [monthIndex]: day,
    }));

    const selectedDate = moment().add(monthIndex, 'months').date(day);

    const eventsForSelectedDate = eventCardsData.filter(event => {
      const eventDate = moment(event.date, 'D MMMM, HH:mm');
      return eventDate.isSame(selectedDate, 'day');
    });
    
    localStorage.setItem('selectedDate', selectedDate.format('YYYY-MM-DD'));
    localStorage.setItem('eventsForSelectedDate', JSON.stringify(eventsForSelectedDate));

    handleSelectedDateChange(eventsForSelectedDate);
  };

  const [visibleDays, setVisibleDays] = useState(11);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true); // Начальное значение true, так как начинаем с первого месяца

  const handleNextClick = () => {
    const newVisibleDays = visibleDays + 11;
    setVisibleDays(newVisibleDays);
    setCanScrollPrev(true); // Можно листать назад
    setCanScrollNext(currentMonthIndex + (newVisibleDays / 30) < monthsToShow - 1); // Можно листать вперёд, если есть ещё месяцы для отображения
  };
  
  const handlePrevClick = () => {
    const newVisibleDays = Math.max(visibleDays - 11, 11);
    setVisibleDays(newVisibleDays);
    setCanScrollNext(true); // Можно листать вперёд
    setCanScrollPrev(newVisibleDays > 11); // Можно листать назад, если остались месяцы для отображения
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
        monthIndex={i} // Передаем индекс месяца
        monthName={months[i]}
        daysToShow={daysToShow}
        selectedDay={selectedDay[i]} // Передаем выбранную дату для месяца
        handleDayClick={handleDayClick} // Передаем функцию для обновления выбранной даты
        weekDays={weekDays}
        currentDayIndex={currentDayIndex}
      />
    );
  }

  return (
    <div className="calendar">
      <div className={`arrow ${canScrollPrev ? "arrow-left" : ""}`}>
        <img className={`arrow-btn arrow-left-btn ${canScrollPrev ? "" : "disabled"}`} src={arrow_left} alt='Стрелка влево' onClick={canScrollPrev ? handlePrevClick : null}/>
      </div>
      <div className="calendar__container">
        <div className="dates-visible" style={{ transform: `translateX(-${(visibleDays - 11) * 47}px)` }}>          
        {calendar}
        </div>
      </div>
      <div className={`arrow ${canScrollNext ? "arrow-right" : ""}`}>
        <img className={`arrow-btn arrow-right-btn ${canScrollNext ? "" : "disabled"}`} src={arrow_right} alt='Стрелка вправо' onClick={canScrollNext ? handleNextClick : null}/>
      </div>
    </div>
  );
}

export default Calendar;