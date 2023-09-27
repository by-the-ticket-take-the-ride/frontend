import "./TicketReview.css";
import image from "../../../images/хрюша.png";

function TicketReview({ typeModified }) {
  return (
    <div className={`ticket-review ${typeModified && 'ticket-review_type_modified'}`}>
      <img className="ticket-review__img" src={image} alt="Мероприятие" />
      <div className={`ticket-review__wrapper ${typeModified && 'ticket-review__wrapper_type_modified'} `}>
        <h3 className={`ticket-review__title ${typeModified && 'ticket-review__title_type_modified'}`}>Хрюша</h3>
        <div className={`ticket-review__time ${typeModified && 'ticket-review__time_type_modified'}`}>
          <i className="ticket-review__icon"></i>
          <p className={`ticket-review__date ${typeModified && 'ticket-review__date_type_modified'}`}>30 сентября</p>
        </div>
      </div>
    </div>
  );
}

export default TicketReview;
