import React from 'react';
import moment from 'moment';

function Month({ monthIndex, daysToShow, selectedDay, handleDayClick, weekDays }) {
  const monthInfo = moment().add(monthIndex, 'months');
  const monthName = monthInfo.format('MMMM');

  const firstDayOfMonth = moment(monthInfo).startOf('month');
  const firstDayOfWeekIndex = firstDayOfMonth.day();

  return (
    <div className='month'>
      <p className="month__name">{monthName}</p>
      <div className='dates'>
        {daysToShow?.map((day, index) => (
          <div key={index} className='date' onClick={() => handleDayClick(monthIndex, day)}>
            <span className={`date__day ${day === selectedDay ? 'date__selected' : ''}`}>{day}</span>
            <span className={`date__weekday ${weekDays[(day + firstDayOfWeekIndex - 1) % 7] === 'сб' || weekDays[(day + firstDayOfWeekIndex - 1) % 7] === 'вс' ? 'date__weekend' : ''}`}>
              {weekDays[(day + firstDayOfWeekIndex - 1) % 7]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Month;
