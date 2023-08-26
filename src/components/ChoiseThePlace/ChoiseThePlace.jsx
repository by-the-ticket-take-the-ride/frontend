import { useEffect, useState } from 'react';
import Button from '../Buttons/Button/Button';
import ButtonCross from '../Buttons/ButtonCross/ButtonCross';
import PlaceIcon from '../Icons/PlaceIcon';
import SceneIcon from '../Icons/SceneIcon';
import TimeIcon from '../Icons/TimeIcon';
import ZoneIcon from '../Icons/ZoneIcon';
import SeatIcon from '../Icons/hall-layout/SeatIcon';
import SeatIconDisabled from '../Icons/hall-layout/SeatIconDisabled';
import './ChoiseThePlace.css'
import hallData from './hallDara.json'
import hallDataServer from './hallDataServer.json'
import event from './event.json'
import ticketsData from './tickets.json'
import CheckMarkIcon from '../Icons/hall-layout/CheckMarkIcon';
import Seat from './Seat/Seat';

function ChoiseThePlace({
  date = '15 сентября, 19:00',
  location = 'Москва, Олимпийский комплекс «Лужники»'
}) {

  const [zones, setZones] = useState(event.place.type.zone);
  const [tickets, setTickets] = useState(ticketsData);
  const [choice, setChoice] = useState(false);
  const [paymentData, setPaymentData] = useState([])
  const [counterPrice, setCounterPrice] = useState(0)
  const [addId, setArrId] = useState([]);
  const [test, setTest] = useState(false);

  const handleDeleteCross = (ok) => {
    let bool = false;
    if (ok) {
      bool = true
    } 
    return true
  }

  const handleСhoicePlace = (numSeat, numRow, nameZone, numPrice ) => {
    if (isPaid(numSeat, numRow, nameZone)) {
      // console.log(isPaid(numSeat, numRow, nameZone));
      return;
    } else if ('') {
      
    } else {
      setCounterPrice((price) => price + numPrice)
      // let i = 0
      setPaymentData((el, id) => {
        // console.log(id);
        return [...paymentData, { seat: numSeat,row: numRow, zone: nameZone, price: numPrice}]
      })
    }
  }

  const handleDeleteСhoicePlace = (id, numPrice, seat, row) => {
    setPaymentData(( currentEvent) => {
      return currentEvent.filter((event, index) => {
        // console.log(id);
        console.log(index);
        console.log(index !== id);
        return index !== id 
      })
    })

    setCounterPrice((price) => price - numPrice)
  }

  const handleDel = (seat, row, zone, price) => {
    setPaymentData((currentEvent) => {
      return currentEvent.filter((event, index) => {
        return seat !== event.seat || row !== event.row || zone !== event.zone
      })
    })
    setCounterPrice((numPrice) => numPrice - price)
  }

  const renderColorZone = (id) => {
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

  function renderColorSeat (zoneId, seat, row, zone, price) {
    switch (zoneId){
      case 1:
        return (
          <SeatIcon 
            // handleСhoicePlace={handleСhoicePlace} 
            // handleDeleteСhoicePlace={handleDeleteСhoicePlace}
            // numSeat={numSeat}
            // numRow={numRow}
            // nameZone={nameZone}
            test={test}
            price={price}
            isCheck={handleDeleteCross}
            seat={seat}
            row={row}
            zone={zone}
            handleDel={handleDel}
            handleСhoicePlace={handleСhoicePlace}
            blue={true} 
            />
        )
      case 2:
        return (
          <SeatIcon
          isCheck={handleDeleteCross}
            test={test}
            price={price}
            seat={seat}
            row={row}
            zone={zone}
            handleDel={handleDel}
            handleСhoicePlace={handleСhoicePlace}
            violet={true}/>
        )
      case 3:
        return (
          <SeatIcon
          isCheck={handleDeleteCross}
            test={test}
            price={price}
            seat={seat}
            row={row}
            zone={zone}
            handleDel={handleDel}
            handleСhoicePlace={handleСhoicePlace}
            red={true}
           />
        )
      default:
        return (
          <SeatIcon handleDel={handleDel} blue={true}/>
        )
    }
  }

  // function renderValueSeat (seatValue, zoneId, numSeat, numRow, nameZone, numPrice, id) {
  function renderValueSeat (seatValue, zoneId, seat, row, zone, price) {
    switch(seatValue){
      case false:
        return (
          renderColorSeat(zoneId, seat, row, zone, price)
        )
      case true:
        return (
          <SeatIconDisabled/>
        )
      case 'choice':
        return (
          <CheckMarkIcon red={true}/>
        )
      default:
        return (
          <SeatIconDisabled/>
        )
    }
  }

  function isPaid (numSeat, numRow, nameZone) {
    return tickets.some(ticket => {
      return ticket.seat === numSeat && ticket.row === numRow && ticket.zone_hall.name === nameZone;
    });
  }
  const declination = (numTicket, text, cases) => text[(numTicket % 100 > 4 && numTicket % 100 < 20) ? 2 : cases[(numTicket % 10 < 5) ? numTicket % 10 : 5]];

  const handleEnding = (numTicket) => {

    const text = ['билет', 'билета', 'билетов'];
    const cases = [2, 0, 1, 1, 1, 2];

    return declination(numTicket, text, cases)
  }

  useEffect(() => {
    console.log(paymentData);
  }, [paymentData])

  return ( 
    <main className="choise-the-place">
      <button className='choise-the-place__close-button'>X</button>
      <h1 className="choise-the-place__title">Выбор места</h1>
      <div className='event-info'>
        <h2 className='event-info__title'>{event.name}</h2>
        <div className='event-info__info-column'>
          <PlaceIcon />
          <span className='event-info__text'>{event.place.name}</span>
        </div>
        <div className='event-info__info-column'>
          <TimeIcon />
          <span className='event-info__text'>{event.date_event} {event.time_event}</span>
        </div>
      </div>

      <section className='hall-layout choise-the-place__hall-layout'>
        <div className='hall-layout__wrapper'>
          {/* Схема зала */}
          <div className='location hall-layout__location'>
            <div className='location__scene'>
              <SceneIcon />
            </div>
            <div className='location__zone-seats'>
              <div className='location__seats'>
                {zones.map((zone) => (
                  <div key={zone.id} className='location__zone'>
                        {Array.from(Array(zone.row).keys()).map((row ) => (
                          <div className='location__row'>
                            <div className='location__column'>
                              {Array.from(Array(Math.floor(zone.seat / zone.row)/ 2).keys()).map(seat => (

                                <span className='location__seat' onClick={() => {
                                  // console.log(`ряд - ${row + 1}`,`место - ${seat + 1}`, `цена - ${zone.price}`)
                                  // handleСhoicePlace(seat + 1,row + 1, zone.name, zone.price)
                                  // console.log(paymentData);
                                }}>
                                  {
                                    renderValueSeat(
                                      isPaid(seat + 1,row + 1, zone.name),
                                      zone.id,
                                      seat + 1,
                                      row + 1,
                                      zone.name,
                                      zone.price
                                    )
                                  }
                                </span>

                              ))}
                            </div>
                            <div className='location__column'>

                              {Array.from(Array(Math.floor(zone.seat / zone.row) / 2).keys()).map(seat => {
                                // let i = 0
                                //   const handleClick = (num) => {
                                //     console.log('choice');
                                //     return renderValueSeat('choice', zone.id)
                                //   }
                                return (
                                  <span className='location__seat' onClick={(evt) => {
                                        // handleСhoicePlace(seat + 1 + ((zone.seat / zone.row) / 2),row + 1, zone.name, zone.price)
                                        // handleDeleteСhoicePlace();
                                        // console.log(seat + 1 + ((zone.seat / zone.row) / 2));
                                      }}>
                                    {
                                      renderValueSeat(
                                        isPaid(seat + 1 + ((zone.seat / zone.row) / 2),row + 1, zone.name), 
                                        zone.id,
                                        seat + 1 + ((zone.seat / zone.row) / 2),
                                        row + 1,
                                        zone.name,
                                        zone.price,
                                        // paymentData.map((el, id) => {
                                        //   return id
                                        // })
                                        ) 
                                    }
                                  </span>
                                  // <Seat 
                                  //   handleСhoicePlace={handleСhoicePlace(seat + 1 + ((zone.seat / zone.row) / 2),row + 1, zone.name, zone.price)}
                                  //   renderValueSeat={renderValueSeat(isPaid(seat + 1 + ((zone.seat / zone.row) / 2),row + 1, zone.name), zone.id) }
                                  //   isPaid={isPaid((seat + 1 + ((zone.seat / zone.row) / 2),row + 1, zone.name))}
                                  //   row={zone.row}
                                  //   seat={zone.seat}
                                  //   zone={zone.name}
                                  //   />

                                )
                              }

                            )}




                            </div>
                          </div>
                        ))}
                      {/* {
                        hall.zone.rows.map((row, id) => (
                          <div key={id} className='location__row'>
                              {hall.zone.id === 1 &&
                                row.row.seatList.map((seat, id) => (
                                (seat.seat.id <= 5) && <span className='location__seat' key={id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${seat.seat.id}`)}>
                                    {
                                      renderValueSeat(seat.seat.value,hall.zone.id)
                                    }
                                  </span>
                                ))
                              }
                              {hall.zone.id === 2 &&
                                row.row.seatList.map((seat, id) => (
                                (seat.seat.id <= 7) && <span className='location__seat' key={id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${seat.seat.id}`)}>
                                      {
                                        renderValueSeat(seat.seat.value,hall.zone.id)
                                      }
                                  </span>
                                ))
                              }
                              {hall.zone.id === 3 &&
                                row.row.seatList.map((seat, id) => (
                                (seat.seat.id <= 8) && <span className='location__seat' key={id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${seat.seat.id}`)}>
                                    {
                                      renderValueSeat(seat.seat.value,hall.zone.id)
                                    }
                                  </span>
                                ))
                              }
                          </div>
                        ))
                      } */}
                    {/* </div> */}
                      {/* <div className='location__zone-column'>
                        {
                          hall.zone.rows.map((row, id) => (
                            <div key={id} className='location__row'>
                              {hall.zone.id === 1 &&
                                row.row.seatList.map((seat) => (
                                (seat.seat.id >= 6) && <span className='location__seat' key={seat.seat.id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${seat.seat.id}`)}>
                                    {
                                      renderValueSeat(seat.seat.value,hall.zone.id)
                                    }
                                  </span>
                                ))
                              }
                              {hall.zone.id === 2 &&
                                row.row.seatList.map((seat) => (
                                (seat.seat.id >= 7) && <span className='location__seat' key={seat.seat.id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${seat.seat.id}`)}>
                                    {
                                      renderValueSeat(seat.seat.value,hall.zone.id)
                                    }
                                  </span>
                                ))
                              }
                              {hall.zone.id === 3 &&
                                row.row.seatList.map((seat) => (
                                (seat.seat.id > 8) && <span className='location__seat' key={seat.seat.id} onClick={() => console.log(`ряд - ${row.row.id}`,`место - ${seat.seat.id}`)}>
                                    {
                                      renderValueSeat(seat.seat.value,hall.zone.id)
                                    }
                                  </span>
                                ))
                              }
                            </div>
                          ))
                        }
                      </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Данные о зонах */}
            <div className='hall-layout__about-zones'>
              {
                zones.map((zoneElem, id) => (
                  <div key={id} className='sector-element'>
                    {
                      renderColorZone(zoneElem.id)
                    }
                    <span className='sector-element__text sector-element__text_type_zone'>{zoneElem.name}</span>
                    <span className='sector-element__text sector-element__text_type_price'>{zoneElem.price} ₽</span>
                  </div>
                ))
              }
            </div>
        </div>

          {/* Счетчик суммы */}
        <div className='counter choise-the-place__counter'>
          <h3 className='counter__title'>Билеты</h3>
          <div className='counter__amount-list'>
            {/* <div className='counter__seat-info'>
              <div className='counter__column'>
                <span className='counter__text counter__text_type_zone'>{zones[0].name}&nbsp;</span>
                <span className='counter__text'>ряд 4,&nbsp;</span>
                <span className='counter__text'> место 8 </span>
              </div>
              <div className='counter__column'>
                <span className='counter__text'>2 000 ₽</span>
                <ButtonCross additionalClass='counter__cross-button' red={true}/>
              </div>
            </div> */}

            {
              paymentData.map((payData, id) => {

                // console.log('ID COUNTER',id);


                return(

                <div key={id} className='counter__seat-info'>
                  <div className='counter__column'>
                    <span className='counter__text counter__text_type_zone'>{payData.zone}&nbsp;</span>
                    <span className='counter__text'>ряд {payData.row},&nbsp;</span>
                    <span className='counter__text'> место {payData.seat} </span>
                  </div>
                  <div className='counter__column'>
                    <span className='counter__text'>{payData.price} ₽</span>
                    <ButtonCross onClick={() => {
                      console.log(id);
                      handleDeleteСhoicePlace(id, payData.price)
                      // handleDeleteCross()
                      // handleDel(payData.seat, payData.row, payData.zone)
                      // setTest(true)
                    }} additionalClass='counter__cross-button' red={true}/>
                  </div>
                </div>
                )
              }
              )
            }
          </div>

          <div className='counter__amount-info'>
            <div className='counter__column'>
              <span className='counter__text'>{paymentData.length} {handleEnding(paymentData.length)} на сумму</span>
              <span>{counterPrice} р</span>
            </div>
            <div className='counter__column'>
              <span className='counter__text'>Сервисный сбор</span>
              <span>100 р</span>
            </div>
            <div className='counter__column'>
              <span className='counter__text counter__info-text_type_total-amount'>Итого к оплате:</span>
              <span className='counter__text  counter__info-text_type_total-amount'>{counterPrice + 100} р</span>
            </div>
          </div>

          <Button children='Оформить заказ' gradient={true} additionalClass='counter__column__add-button'/>

        </div>
      </section>
    </main>
  );
}

export default ChoiseThePlace;