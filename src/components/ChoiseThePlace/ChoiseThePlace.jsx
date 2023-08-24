import PlaceIcon from '../Icons/PlaceIcon';
import SceneIcon from '../Icons/SceneIcon';
import TimeIcon from '../Icons/TimeIcon';
import ZoneIcon from '../Icons/ZoneIcon';
import SeatIcon from '../Icons/hall-layout/SeatIcon';
import './ChoiseThePlace.css'
import hallData from './hallDara.json'

function ChoiseThePlace({
  date = '15 сентября, 19:00',
  location = 'Москва, Олимпийский комплекс «Лужники»'
}) {

  const func = (id) => {
    switch (id){
      case 1:
        return (
          <ZoneIcon blue={true}/>
        )
      case 2:
        return (
          <ZoneIcon violet={true}/>
        )
      case 3:
        return (
          <ZoneIcon red={true}/>
        )
      default:
        return (
          <ZoneIcon blue={true}/>
        )
    }
  }

  function renderColorIcons (zoneId) {
    switch (zoneId){
      case 1:
        return (
          <SeatIcon blue={true}/>
        )
      case 2:
        return (
          <SeatIcon violet={true}/>
        )
      case 3:
        return (
          <SeatIcon red={true}/>
        )
      default:
        return (
          <SeatIcon blue={true}/>
        )
    }
  }

  return ( 
    <main className="choise-the-place">
      <button className='choise-the-place__close-button'>X</button>
      <h1 className="choise-the-place__title">Выбор места</h1>
      <div className='event-info'>
        <h2 className='event-info__title'>Ziver</h2>
        <div className='event-info__info-column'>
          <PlaceIcon />
          <span className='event-info__text'>{date}</span>
        </div>
        <div className='event-info__info-column'>
          {/* <i className='event-info__icon event-card__icon_place'></i> */}
          <TimeIcon />
          <span className='event-info__text'>{location}</span>
        </div>
      </div>

      <section className='hall-layout choise-the-place__hall-layout'>
        <div className='hall-layout__wrapper'>
          <div className='hall-layout__about-zones'>
            {
              hallData.map((zoneElem, id) => (
                <div key={id} className='sector-element'>
                  {
                    func(zoneElem.zone.id)
                  }
                  <span className='sector-element__text sector-element__text_type_zone'>Зона {zoneElem.zone.id}</span>
                  <span className='sector-element__text sector-element__text_type_price'>{zoneElem.zone.price} ₽</span>
                </div>
              ))
            }
          </div>

          <div className='location hall-layout__location'>
            <div className='location__scene'>
              <SceneIcon width='252' height='50' rx='126' ry='25'/>
            </div>
            <div className='location__zone-seats'>
              <div className='location__seats'>
                {hallData.map((hall ) => (
                  <div key={hall.zone.id} className='location__zone'>
                      <div className='location__zone-column'>
                        {
                          hall.zone.rows.map((row, id) => (
                            <div key={id} className='location__row'>
                                {hall.zone.id === 1 &&
                                  row.row.placeList.map((place, id) => (
                                  (place.place.id <= 5) && <span className='location__seat' key={id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${place.place.id}`)}>
                                      {renderColorIcons(hall.zone.id)}
                                    </span>
                                  ))
                                }
                                {hall.zone.id === 2 &&
                                  row.row.placeList.map((place, id) => (
                                  (place.place.id <= 7) && <span className='location__seat' key={id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${place.place.id}`)}>
                                      {renderColorIcons(hall.zone.id)}
                                    </span>
                                  ))
                                }
                                {hall.zone.id === 3 &&
                                  row.row.placeList.map((place, id) => (
                                  (place.place.id <= 8) && <span className='location__seat' key={id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${place.place.id}`)}>
                                      {renderColorIcons(hall.zone.id)}
                                    </span>
                                  ))
                                }
                            </div>
                          ))
                        }
                      </div>
                      <div className='location__zone-column'>
                        {
                          hall.zone.rows.map((row, id) => (
                            <div key={id} className='location__row'>
                              {hall.zone.id === 1 &&
                                row.row.placeList.map((place) => (
                                (place.place.id >= 6) && <span className='location__seat' key={place.place.id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${place.place.id}`)}>
                                    {renderColorIcons(hall.zone.id)}
                                  </span>
                                ))
                              }
                              {hall.zone.id === 2 &&
                                row.row.placeList.map((place) => (
                                (place.place.id >= 7) && <span className='location__seat' key={place.place.id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${place.place.id}`)}>
                                    {renderColorIcons(hall.zone.id)}
                                  </span>
                                ))
                              }
                              {hall.zone.id === 3 &&
                                row.row.placeList.map((place) => (
                                (place.place.id >= 8) && <span className='location__seat' key={place.place.id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${place.place.id}`)}>
                                    {renderColorIcons(hall.zone.id)}
                                  </span>
                                ))
                              }
                            </div>
                          ))
                        }
                      </div>
                  </div>
                ))}
              </div>



            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              Свободно
            </div>
            <div>
              Занято
            </div>
            <div>
              Выш выбор
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ChoiseThePlace;