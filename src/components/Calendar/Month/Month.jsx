import React from 'react';
import './Month.css';
import moment from 'moment';

function Month({ monthIndex, daysToShow, selectedDay, handleDayClick, weekDays, currentDayIndex, visibleDays }) {
  const monthInfo = moment().add(monthIndex, 'months');
  const monthName = monthInfo.format('MMMM');

  return (
    <div className='month__container'>
      <p className="month__name">{monthName}</p>
      <div className='dates'>
        {daysToShow.map((day, index) => (
          <div key={index} className='date' onClick={() => handleDayClick(monthIndex, day)}>
            <span className={`date__day ${day === selectedDay ? 'date__selected' : ''}`}>{day}</span>
            <span className={`date__weekday ${weekDays[((currentDayIndex + 1) + index) % 7] === 'сб' || weekDays[((currentDayIndex + 1) + index) % 7] === 'вс' ? 'date__weekend' : ''}`}>
              {weekDays[((currentDayIndex + 1) + index) % 7]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Month;
