import { eventCardsData } from '../../assets/test-data/eventCardsData';
import Map from '../Map/Map';

function EventLocation() {

    const { map, location, adress } = eventCardsData[0];

    return(
        <section className="event-location">
            <h2 className="event-location__title">Место проведения</h2>
            <p className="event-location__location">{location}</p>
            <p className="event-location__adress">{adress}</p>
            <Map className={"event-location__map"}/>
        </section >
    )
}

export default EventLocation;