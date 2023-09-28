import image from '../../../images/хрюша.png'
import StarRating from '../StarRating/StarRating';
import './Ticket.css'

function Ticket({onClick,completed}) {
  return (
    <div className='ticket'>
      <img className='ticket__img' src={image} alt='Мероприятие' />
      <div className='ticket__wrapper'>

      <h3 className='ticket__title'>Хрюша</h3>
      <div className='ticket__time'>

      <i className="ticket__icon"></i>
      <p className='ticket__date'>{completed ? 'ЗАВЕРШЕНО' : '30 сентября'}</p>
      </div>
      </div>
      { completed && <StarRating/>}
    </div>
  );
}

export default Ticket;