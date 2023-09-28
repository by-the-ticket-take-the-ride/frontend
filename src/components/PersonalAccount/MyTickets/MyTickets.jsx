import { useState } from "react";
import ModifiedReviewComp from "../NotificationPopup/ModifiedReviewComp/ModifiedReviewComp";
import NotificationPopup from "../NotificationPopup/NotificationPopup";
import Ticket from "../Ticket/Ticket";
import "./MyTickets.css";

function MyTickets() {
  const [isNotificationPopup, setIsNotificationPopup] = useState(false);

  const handleClose = () => {
    setIsNotificationPopup(!isNotificationPopup)
  }

  const handleClickTicket = () => {
    setIsNotificationPopup(!isNotificationPopup)
  }

  return (
    <section className="my-tickets">
      {
        isNotificationPopup &&
          <NotificationPopup>
            <ModifiedReviewComp handleClose={handleClose}/>
          </NotificationPopup>
      }
      <div className="my-tickets__wrapper my-tickets__wrapper_type_active">
        <Ticket />
      </div>
      <div>
        <h2 className="my-tickets__title">Завершенные</h2>
        <div className="my-tickets__wrapper my-tickets__wrapper_type_disabled">
          <div className="my-tickets__ticket" onClick={handleClickTicket}>
            <Ticket completed={true}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyTickets;
