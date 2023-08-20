import './Calendar.css';
import React from 'react';
import Month from './Month/Month';

function Calendar() {
  const defaultProps = {
    weekDays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  }

  const {weekDays, months} = defaultProps;

  //получаем данные по текущему году, месяцу и дню
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  //состояние для отслеживания выбранной даты
  const [selectedDay, setSelectedDay] = React.useState(currentDay);

  //вычисляем количество дней в текущем месяце
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const days = [
    ...Array.from({ length: daysInMonth}, (_, i) => i + 1)
  ]

  //ищем индекс текущего дня в массиве days
  const currentDayIndex = days.indexOf(currentDay);

  //получаем название текущего месяца из массива
  const currentMonthName = months[currentMonth];

  //получаем название следующего месяца из массива
  // const nextMonth = (currentMonth + 1) % 12;
  // const nextMonthName = months[nextMonth];

  //создаем новый массив с днями месяца, начиная с текущей даты и следующими днями
  const daysToShow = [
    ...days.slice(currentDayIndex, currentDayIndex + 21),
    ...days.slice(0, 21 - (days.length - currentDayIndex)),
  ];

  //обновляем состояние выбранной даты при клике
  function handleDayClick(day) {
    setSelectedDay(day);
  };

  return (
    <div className='calendar'>
      <Month
        monthName={currentMonthName}
        daysToShow={daysToShow}
        selectedDay={selectedDay}
        handleDayClick={handleDayClick}
        weekDays={weekDays}
        currentDayIndex={currentDayIndex}
      />
    </div>
  )
}

export default Calendar;