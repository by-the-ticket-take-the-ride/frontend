import './TicketReview.css';
import image from '../../../images/хрюша.png'

function TicketReview() {
  return (
<div className='ticket-review'>
      <img className='ticket-review__img' src={image} alt='Мероприятие' />
      <div className='ticket-review__wrapper'>

      <h3 className='ticket-review__title'>Хрюша</h3>
      <div className='ticket-review__time'>

      <i className="ticket-review__icon"></i>
      <p className='ticket-review__date'>30 сентября</p>
      </div>
      </div>
    </div>
  );
}

export default TicketReview;