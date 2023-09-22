import Map from '../Map/Map';

function EventLocation( { eventData }) {

    return(
        <section className="event-location">
            <div className="event-location__container">
                <h2 className="event-location__title">Место проведения</h2>
                <p className="event-location__location">{`${eventData?.place?.name}, ${eventData?.place?.type?.name}`}</p>
                <p className="event-location__adress">{eventData?.place?.address}</p>
                <Map className={"event-location__map"} map={eventData.map} />
            </div>
        </section >
    )
}

export default EventLocation;