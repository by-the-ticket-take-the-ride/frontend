import React, { useState } from 'react';
import { format, addDays, subDays, startOfMonth, isSameMonth, isSameDay } from 'date-fns';
import { ru } from 'date-fns/locale';
import PopupWithMessageNoEvents from '../PopupWithMessageNoEvents/PopupWithMessageNoEvents';

const Calendar = ({eventCards}) => {
  const [date, setDate] = useState(new Date());
  const [buttonDisable, setbuttonDisable] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0 });
  const eventDates = eventCards.map(event => event.date_event);

  const handleMouseEnter = (e) => {

    if (e.currentTarget.classList.contains('calendar__day-no-event')) {
      setPopupVisible(true);
      const target = e.currentTarget;
      const x = target.offsetLeft;
      setPopupPosition({ x: x});
    }
  };

  const handleMouseLeave = () => {
    setPopupVisible(false);
  };


    const handleDayClick = (date) => {
      setCurrentDate(date)
  };

  const getDaysInMonth = () => {
    const days = [];
    let currentDay = date;

    for (let i = 0; i < 22; i++) {
      days.push(currentDay);
      currentDay = addDays(currentDay, 1);
    }

    return days;
  };

  const getDaysByYearAndMonth = () => {
    const daysByYearAndMonth = {};
    const days = getDaysInMonth();
  
    days.forEach((date) => {
      const year = format(date, 'yyyy', { locale: ru });
      const month = format(date, 'LLLL', { locale: ru });
  
      if (!daysByYearAndMonth[year]) {
        daysByYearAndMonth[year] = {};
      }
  
      if (!daysByYearAndMonth[year][month]) {
        daysByYearAndMonth[year][month] = [];
      }
  
      daysByYearAndMonth[year][month].push(date);
    });
  
    return daysByYearAndMonth;
  };

  const formatWithDayOfWeek = (date) => {
    const formattedDate = format(date, 'dd', { locale: ru });
    return formattedDate;
  };

  const dayOfWeek = (date) => {
    const dayOfWeek = format(date, 'EEEE', { locale: ru });
  
    const dayOfWeekShort = {
      'понедельник': 'пн',
      'вторник': 'вт',
      'среда': 'ср',
      'четверг': 'чт',
      'пятница': 'пт',
      'суббота': 'сб',
      'воскресенье': 'вс',
    };
    
    const shortDayOfWeek = dayOfWeekShort[dayOfWeek] || dayOfWeek.slice(0, 2);
    return shortDayOfWeek;
  };

  const handlePrevMonth = () => {
    // Проверка на то, можно ли переключиться на предыдущий месяц
    const canSwitchToPrevMonth = !isSameMonth(date, startOfMonth(new Date()));
    if (canSwitchToPrevMonth) {
      setDate(subDays(date, 22));
    } else {
      setbuttonDisable(true)
    }
  };

  const handleNextMonth = () => {
    setDate(addDays(date, 22));
    setbuttonDisable(false)
  };

  return (
    <div className='calendar'>
      <div className='calendar__container'>
        <button
          onClick={handlePrevMonth}
          disabled={buttonDisable}
          className='calendar__button-arrow calendar__button-arrow_left'
          type='button'
        >
        </button>

        <ul className='calendar__months'>
        <PopupWithMessageNoEvents isPopupVisible={isPopupVisible} x={popupPosition.x}/>
          
          {Object.entries(getDaysByYearAndMonth()).map(([year, months]) => {
              return Object.entries(months).map(([month, days]) => {
                return(
                  <li key={month} className='calendar__month'>
                    <div className='calendar__month-year'>
                      <span className='calendar__month-name'>{month.charAt(0).toUpperCase() + month.slice(1)}</span>
                      <span className='calendar__year'>‘{year.slice(2)}</span>
                    </div>
                  <ul className='calendar__days'>
                    {days.map((date) => {
                      const formattedDate = format(date, 'yyyy-MM-dd');
                      const isEventDate = eventDates.includes(formattedDate);
                      return (
                        <li key={date} className={`calendar__date ${!isEventDate ? 'calendar__day-no-event' : ''}`}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <span
                            onClick={() => handleDayClick(date)}
                            className={`calendar__day ${isSameDay(date, currentDate) ? 'calendar__day-current' : ''}`}>{formatWithDayOfWeek(date)}</span>
                          <span className={`calendar__day-of-the-week ${format(date, 'EEEE', { locale: ru }) === 'суббота' || format(date, 'EEEE', { locale: ru }) === 'воскресенье' ? 'calendar__day-weekend' : ''}`}>{dayOfWeek(date)}</span>
                        </li>
                      )
                  })}
                  </ul>
                </li>
                )
              })
            })}
        </ul>

        <button 
          onClick={handleNextMonth}
          className='calendar__button-arrow calendar__button-arrow_right '
          type='button'
        >
        </button>
      </div>
    </div>
  );
};

export default Calendar;