import { useContext, useState } from "react";
import ModifiedReviewComp from "../NotificationPopup/ModifiedReviewComp/ModifiedReviewComp";
import NotificationPopup from "../NotificationPopup/NotificationPopup";
import Ticket from "../Ticket/Ticket";
import "./MyTickets.css";
import useSeatContext from "../../../hooks/useSeatContext";
import { EventsContext } from "../../../constext/EventsContext";
import NotificationPageTicket from "../NotificationPageTicket/NotificationPageTicket";

function MyTickets() {
  const [isNotificationPopup, setIsNotificationPopup] = useState(false);
  const { setCurrentReviewData } = useContext(EventsContext);
  const { tickets } = useSeatContext();

  const handleClose = () => {
    setIsNotificationPopup(!isNotificationPopup);
  };

  const handleClickTicket = (image, date, ticketName) => {
    setIsNotificationPopup(!isNotificationPopup);

    setCurrentReviewData({
      id: Date.now(),
      nameEvent: ticketName,
      dateEvent: date,
      image: image,
      rating: null,
      comment: ''
    })
  };

  const ticketFilter = () => {
    console.log(tickets);
    const counts = tickets.reduce((counts, ticketName, i) => {
      counts[ticketName?.event?.name] = (counts[ticketName?.event?.name] || 0) + 1;
      return counts;
    }, {});

    return uniqueElem(counts);
  };

  function uniqueElem(counts) {
    let uniques = Object.keys(counts);
    uniques.sort((a, b) =>
      counts[a] === counts[b] ? a.localeCompare(b) : counts[b] - counts[a]
    );
    return uniques;
  }

  function filterDate(date) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentDay = String(currentDate).split(" ")[2];
    const currentMonth = currentDate.getMonth() + 1;
    const dateArr = date?.split("-");
    if (dateArr[0] < currentYear) {
      return true;
    }
    if (dateArr[0] >= currentYear && Number(dateArr[1]) < currentMonth) {
      return true;
    }
    if (dateArr[0] >= currentYear && Number(dateArr[1]) > currentMonth) {
      return false;
    }
    if (dateArr[0] >= currentYear && dateArr[1] >= currentMonth) {
       if(dateArr[0] >= currentYear && dateArr[1] >= currentMonth && Number(dateArr[2]) > currentDay) {
        return false
      }
       if(dateArr[0] >= currentYear && dateArr[1] >= currentMonth && Number(dateArr[2]) < currentDay) {
        return true
      }
      return false
    }
  }


  return (
    <section className="my-tickets">
      {
        tickets?.length === 0 ? <NotificationPageTicket/> :
        <>

      {isNotificationPopup && (
        <NotificationPopup>
          <ModifiedReviewComp handleClose={handleClose} />
        </NotificationPopup>
      )}
      <div className="my-tickets__wrapper my-tickets__wrapper_type_active">
        {ticketFilter()?.map((ticket, id) => {
          const dateFilter = () => {
            console.log(ticket);
            const counts = tickets.reduce((counts, ticketName, i) => {
              counts[ticketName?.event?.date_event] =
                (counts[ticketName?.event?.date_event] || 0) + 1;

              return counts;
            }, {});
            return uniqueElem(counts);
          };

          const imgFilter = () => {
            const counts = tickets.reduce((counts, ticketName, i) => {
              counts[ticketName?.event?.image] =
                (counts[ticketName?.event?.image] || 0) + 1;
              return counts;
            }, {});
            return uniqueElem(counts);
          };
          return (
            <Ticket
              key={id}
              ticketName={ticket}
              date={dateFilter()[id]}
              image={imgFilter()[id]}
            />
          );
        })}
      </div>
      <div>
        <h2 className="my-tickets__title">Завершенные</h2>
        <div className="my-tickets__wrapper my-tickets__wrapper_type_disabled">
            {ticketFilter()?.map((ticket, id) => {
              const dateFilter = () => {
                const counts = tickets.reduce((counts, ticketName, i) => {
                  counts[ticketName?.event?.date_event] =
                    (counts[ticketName?.event?.date_event] || 0) + 1;

                  return counts;
                }, {});
                return uniqueElem(counts);
              };

              const imgFilter = () => {
                const counts = tickets.reduce((counts, ticketName, i) => {
                  counts[ticketName?.event?.image] =
                    (counts[ticketName?.event?.image] || 0) + 1;
                  return counts;
                }, {});
                return uniqueElem(counts);
              };
              return (
                filterDate(dateFilter()[id], ticket) && (
                  <div key={id} className="my-tickets__ticket" onClick={() => handleClickTicket(imgFilter()[id],dateFilter()[id], ticket)}>
                    <Ticket
                      ticketName={ticket}
                      completed={true}
                      image={imgFilter()[id]}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
        </>
      }
    </section>
  );
}

export default MyTickets;
