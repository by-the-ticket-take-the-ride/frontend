import image from '../../../images/хрюша.png'
import { renderDate } from '../../../utils/supportFunction';
import StarRating from '../StarRating/StarRating';
import './Ticket.css'

function Ticket({completed, ticketData ,date, image}) {
  // console.log(image);

  return (
    <div className='ticket'>
      <img className='ticket__img' src={image} alt='Мероприятие' />
      <div className='ticket__wrapper'>

      <h3 className='ticket__title'>{ticketData}</h3>
      <div className='ticket__time'>

      <i className="ticket__icon"></i>
      <p className='ticket__date'>{completed ? 'ЗАВЕРШЕНО' : `${renderDate(date)}`}</p>
      </div>
      </div>
      { completed && <StarRating/>}
    </div>
  );
}

export default Ticket;