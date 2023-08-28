import { eventCardsData } from '../../assets/test-data/eventCardsData';

function Map({className}) {

    const { map } = eventCardsData[0];

    return(
        <iframe src={map} className={className}></iframe>
    )
}

export default Map;