import { useContext } from 'react';
import EventCard from '../../EventCard/EventCard';
import './MyFavorites.css';
import { EventsContext } from '../../../constext/EventsContext';
import NotificationPage from '../NotificationPage/NotificationPage';

function MyFavorites() {
  const { events } = useContext(EventsContext);
  return (
    <section className='my-favorites'>
        { events.lenght === 0 ?
          <NotificationPage/> :
          <div className='my-favorites__list'>
            {events.map( (event) => (
              <EventCard key={event.id} eventData={event}  />
            ))}
          </div>
        }
    </section>
  );
}

export default MyFavorites;