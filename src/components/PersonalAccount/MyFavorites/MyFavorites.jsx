import { useContext, useEffect, useState } from 'react';
import EventCard from '../../EventCard/EventCard';
import './MyFavorites.css';
import { EventsContext } from '../../../constext/EventsContext';
import NotificationPage from '../NotificationPage/NotificationPage';
import { getAllEventsAuthUser } from '../../../utils/currentEventApi';

function MyFavorites() {
  const [eventsAuthUser, setEventsAuthUser] = useState([]);
  const { renderCard } = useContext(EventsContext);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    getAllEventsAuthUser(token)
      .then(events => setEventsAuthUser(events))
      .catch(err => console.log(err))
  }, [renderCard]);
  return (
    <section className='my-favorites'>
        { eventsAuthUser?.some(event => event.is_favorited === true) ?
          <div className='my-favorites__list'>
            {eventsAuthUser?.map( (event) => {
              return (
                  event.is_favorited === true && <EventCard key={event.id} eventData={event}  />
              )
            }
            )}
          </div> :
          <NotificationPage/>
        }
    </section>
  );
}

export default MyFavorites;