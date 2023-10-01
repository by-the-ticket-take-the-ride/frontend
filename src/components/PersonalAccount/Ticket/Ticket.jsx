import { renderDate } from "../../../utils/supportFunction";
import StarRatingDisabled from "../StarRatingDisabled/StarRatingDisabled";
import "./Ticket.css";

function Ticket({ completed, ticketName, date, image }) {
  console.log( completed, ticketName, date, image);
  return (
    <div className="ticket">
      <img className="ticket__img" src={image} alt="Мероприятие" />
      <div className="ticket__wrapper">
        <h3 className="ticket__title">{ticketName}</h3>
        <div className="ticket__time">
          <i className="ticket__icon"></i>
          <p className="ticket__date">
            {completed ? "ЗАВЕРШЕНО" : `${renderDate(date)}`}
          </p>
        </div>
      </div>
      {completed && <StarRatingDisabled />}
    </div>
  );
}

export default Ticket;
