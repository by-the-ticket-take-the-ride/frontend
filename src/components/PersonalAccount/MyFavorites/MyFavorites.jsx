import { useContext, useEffect, useState } from 'react';
import EventCard from '../../EventCard/EventCard';
import './MyFavorites.css';
import { EventsContext } from '../../../constext/EventsContext';
import NotificationPage from '../NotificationPage/NotificationPage';
import { getAllEventsAuthUser } from '../../../utils/currentEventApi';

function MyFavorites() {
  // const { events, } = useContext(EventsContext);
  const [eventsAuthUser, setEventsAuthUser] = useState([]);
  useEffect(() => {
    getAllEventsAuthUser()
      .then(events => setEventsAuthUser(events))
      .catch(err => console.log(err))
  }, []);
  return (
    <section className='my-favorites'>
        { eventsAuthUser?.some(event => event.is_favorited === true) ?
          <div className='my-favorites__list'>
            {eventsAuthUser?.map( (event) => {
              // console.log(events.some(event => event.is_favorited === true));
              console.log(eventsAuthUser);
              return (
                
                  event.is_favorited === true && <EventCard key={event.id} eventData={event}  />
                
                // <EventCard key={event.id} eventData={event}  />
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