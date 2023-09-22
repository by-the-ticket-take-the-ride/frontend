import React from "react";
import EventCard from "../EventCard/EventCard";

function EventsCardList() {
  const selectedDateEvents = JSON.parse(localStorage.getItem('eventsForSelectedDate')) || [];

  return (
    <div className='events-list'>
      {selectedDateEvents.map(event => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  )
}

export default EventsCardList;