import Ticket from "../Ticket/Ticket";
import "./MyTickets.css";

function MyTickets() {
  return (
    <section className="my-tickets">
      <div className="my-tickets__wrapper my-tickets__wrapper_type_active">
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <div>
        <h2 className="my-tickets__title">Завершенные</h2>
        <div className="my-tickets__wrapper my-tickets__wrapper_type_disabled">
          <Ticket />
        </div>
      </div>
    </section>
  );
}

export default MyTickets;
