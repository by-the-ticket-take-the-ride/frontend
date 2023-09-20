import React from 'react';
import moment from 'moment';

function Month({ monthIndex, daysToShow, selectedDay, handleDayClick, weekDays, currentDay, eventDates, currentSelectedDay, handleMouseLeave, handleMouseEnter }) {
  const monthInfo = moment().add(monthIndex, 'months');
  const monthName = monthInfo.format('MMMM');

  const firstDayOfMonth = moment(monthInfo).startOf('month');
  const firstDayOfWeekIndex = firstDayOfMonth.day();

  const handleDateClick = (day) => {
    handleDayClick(monthIndex, day);
  };

  return (
    <div className='month'>
      <p className="month__name">{monthName}</p>
      <div className='dates'>
        {daysToShow?.map((day, index) => {
          const isEventDate = eventDates.includes(moment({ year: monthInfo.year(), month: monthInfo.month(), date: day }).format('YYYY-MM-DD'));

          return (
            <div
              key={index}
              className={`date ${isEventDate ? '' : 'date__no-event'}`}
              onClick={() => handleDateClick(day)}
            >
              <span className={`date__day ${day === currentSelectedDay ? 'date__selected' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {day}
              </span>
              <span className={`date__weekday ${weekDays[(day + firstDayOfWeekIndex - 1) % 7] === 'сб' || weekDays[(day + firstDayOfWeekIndex - 1) % 7] === 'вс' ? 'date__weekend' : ''}`}>
                {weekDays[(day + firstDayOfWeekIndex - 1) % 7]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Month;
