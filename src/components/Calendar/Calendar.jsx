import './Calendar.css';

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

  //вычисляем количество дней в текущем месяце
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const days = [
    ...Array.from({ length: daysInMonth}, (_, i) => i + 1)
  ]

  //ищем индекс текущего дня в массиве days
  const currentDayIndex = days.indexOf(currentDay);

  //получаем название текущего месяца из массива
  const currentMonthName = months[currentMonth];

  //создаем новый массив с днями месяца, начиная с текущей даты и следующими днями
  const daysToShow = [
    ...days.slice(currentDayIndex, currentDayIndex + 21),
    ...days.slice(0, 21 - (days.length - currentDayIndex)),
  ];

  return (
    <div className='calendar'>
      <p className='calendar__month'>{currentMonthName}</p>
      <div className='dates'>
        {
          daysToShow.map((day, index) => (
            <div key={index} className='date'>
              <span className='date__day'>{day}</span>
              <span className={`date__weekday ${weekDays[((currentDayIndex + 1) + index) % 7] === 'сб' 
              || weekDays[((currentDayIndex + 1) + index) % 7] === 'вс' ? 'date__weekend' : ''}`}>
                {weekDays[((currentDayIndex + 1) + index) % 7]}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Calendar;