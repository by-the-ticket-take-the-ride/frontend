import './Calendar.css';
import React, {useState} from 'react';
import Month from './Month/Month';
import moment from 'moment';
import 'moment/locale/ru';
import arrow_left from '../../assets/images/icon-arrow-left.svg';
import arrow_right from '../../assets/images/icon-arrow-right.svg';

function Calendar() {
  const defaultProps = {
    weekDays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  }

  const {weekDays, months} = defaultProps;

    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const currentDate = moment();
  const currentYear = currentDate.year();
  const currentMonth = currentDate.month();
  const currentDay = currentDate.date();

  const currentDayIndex = currentDate.day();

  const monthsToShow = 15; // Количество месяцев для отображения

  const [selectedDay, setSelectedDay] = useState({});

  const handleDayClick = (monthIndex, day) => {
    setSelectedDay(() => ({
      // ...prevSelectedDays,
      [monthIndex]: day, // Обновляем выбранную дату для конкретного месяца
    }));
  };

  const [visibleDays, setVisibleDays] = useState(10);

  const handleNextClick = () => {
    setVisibleDays(prev => prev + 10); // Limit to the total number of days
  };

  const handlePrevClick = () => {
    setVisibleDays(prev => Math.max(prev - 10, 10)); // Minimum of 10 visible days
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
      <img className="arrow arrow-left" src={arrow_left} alt='Стрелка влево' onClick={handlePrevClick}/>
      <div className="calendar__container">
        <div className="dates-visible" style={{ transform: `translateX(-${(visibleDays - 10) * 54}px)` }}>          
        {calendar}
        </div>
      </div>
      <img className="arrow arrow-right" src={arrow_right} alt='Стрелка вправо' onClick={handleNextClick}/>
    </div>
  );
  
  
}

export default Calendar;