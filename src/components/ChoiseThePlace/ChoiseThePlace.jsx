import { useContext, useState } from 'react';
import Button from '../Buttons/Button/Button';
import ButtonCross from '../Buttons/ButtonCross/ButtonCross';
import PlaceIcon from '../Icons/PlaceIcon';
import SceneIcon from '../Icons/SceneIcon';
import TimeIcon from '../Icons/TimeIcon';
import ZoneIcon from '../Icons/ZoneIcon';
import SeatIcon from '../Icons/hall-layout/SeatIcon';
import SeatIconDisabled from '../Icons/hall-layout/SeatIconDisabled';
import './ChoiseThePlace.css'
import useSeatContext from '../../hooks/useSeatContext';
import { useNavigate } from 'react-router-dom';
import { EventsContext } from '../../constext/EventsContext';
import * as supportFunction from '../../utils/supportFunction'



function ChoiseThePlace() {

  const { eventForChoisePlace, eventZone, tickets, setTotalOrder, isOpenPopap,setIsOpenPopap } = useSeatContext();
  const [paymentData, setPaymentData] = useState([]);
  const [counterPrice, setCounterPrice] = useState(0);
  const navigate = useNavigate();

  const handleСhoicePlace = (numSeat, numRow, nameZone, numPrice ) => {
    if (isPaid(numSeat, numRow, nameZone)) {
      return;
    } else {
      setCounterPrice((price) => price + numPrice)
      setPaymentData((el, id) => {
        return [...paymentData, { seat: numSeat,row: numRow, zone: nameZone, price: numPrice}]
      })
    }
  }

  const handleDeleteСhoicePlace = (id, numPrice) => {
    setPaymentData(( currentEvent) => {
      return currentEvent.filter((event, index) => {
        return index !== id 
      })
    })

    setCounterPrice((price) => price - numPrice)
  }

  const handleDel = (seat, row, zone, price) => {
    setPaymentData((currentEvent) => {
      return currentEvent.filter((event) => {
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
            price={price}
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

  const declination = (numTicket, text, cases) => {
    return text[(numTicket % 100 > 4 && numTicket % 100 < 20) ? 2 : cases[(numTicket % 10 < 5) ? numTicket % 10 : 5]]
  };

  const handleEnding = (numTicket) => {

    const text = ['билет', 'билета', 'билетов'];
    const cases = [2, 0, 1, 1, 1, 2];

    return declination(numTicket, text, cases)
  }

  const renderInt = (num) => {
    const numbFmt = new Intl.NumberFormat('ru-RU').format(num);
    return numbFmt
  }

  const handleOrder = () => {
    if (counterPrice > 0) {
      setTotalOrder({
        totalSum: counterPrice + 100,
        tickets: paymentData
      })
      navigate('/order')
    }
  }

  const handleClose = () => {
    // Для закрытия
    // setIsOpen(isOpen)
    setIsOpenPopap(!isOpenPopap)
  }

  return ( 
    <div className={`choise-the-place ${isOpenPopap ?  'choise-the-place_visible' : ''}`}>
      <div className='choise-the-place__container'>

        <ButtonCross onClick={handleClose} black={true} additionalClass={'choise-the-place__close-button'}/>
        <h1 className="choise-the-place__title">Выбор места</h1>
        <div className='event-info'>
          <h2 className='event-info__title'>{eventForChoisePlace?.name}</h2>
          <div className='event-info__info-column'>
            <PlaceIcon />
            <span className='event-info__text'>{eventForChoisePlace?.place?.city?.name}, {eventForChoisePlace?.place?.name}</span>
          </div>
          <div className='event-info__info-column'>
            <TimeIcon />
            <span className='event-info__text'>{supportFunction.renderDate(eventForChoisePlace?.date_event)}, {supportFunction.renderTime(eventForChoisePlace?.time_event)}</span>
          </div>
        </div>

        <section className='hall-layout choise-the-place__hall-layout'>
          <div className='hall-layout__wrapper'>
            <div className='location hall-layout__location'>
              <div className='location__scene'>
                <SceneIcon />
              </div>
              <div className='location__zone-seats'>
                <div className='location__seats'>
                  {eventZone.map((zone) => (
                    <div key={zone.id} className='location__zone'>
                      {Array.from(Array(zone.row).keys()).map((row, i ) => (
                        <div key={i} className='location__row'>
                          <div className='location__column'>
                            {Array.from(Array(Math.floor((zone.seat / zone.row)/ 2)).keys()).map((seat, i) => (
                              <span key={i} className='location__seat' onClick={() => {
                                // setListTicket([...listTicket, { numSeat: seat + 1, numRow: row + 1, nameZone: zone.name}])
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

                            {Array.from(Array(Math.floor((zone.seat / zone.row) / 2)).keys()).map((seat, i) => {
                              return (
                                <span key={i} className='location__seat' onClick={() => {

                                  }}>
                                    
                                    { renderValueSeat(
                                        isPaid(seat + 1 + (Math.floor(zone.seat / zone.row) / 2),row + 1, zone.name), 
                                        zone.id,
                                        seat + 1 + (Math.floor(zone.seat / zone.row) / 2),
                                        row + 1,
                                        zone.name,
                                        zone.price,
                                    )
                                  }
                                </span>
                              )
                            }

                          )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
              <div className='hall-layout__about-zones'>
                {
                  eventZone.map((zoneElem, id) => (
                    <div key={id} className='sector-element'>
                      {
                        renderColorZone(zoneElem.id)
                      }
                      <span className='sector-element__text sector-element__text_type_zone'>{zoneElem.name}</span>
                      <span className='sector-element__text sector-element__text_type_price'>{renderInt(zoneElem.price)} ₽</span>
                    </div>
                  ))
                }
              </div>
          </div>

          <div className='counter choise-the-place__counter'>
            <h3 className='counter__title'>Билеты</h3>
            <div className='counter__amount-list'>
              {
                paymentData.map((payData, id) => {

                  return(

                  <div key={id} className='counter__seat-info'>
                    <div className='counter__column'>
                      <span className='counter__text counter__text_type_zone'>{payData.zone}&nbsp;</span>
                      <span className='counter__text'>ряд {payData.row},&nbsp;</span>
                      <span className='counter__text'> место {payData.seat} </span>
                    </div>
                    <div className='counter__column'>
                      <span className='counter__text'>{renderInt(payData.price)} ₽</span>
                      <ButtonCross onClick={() => {
                        handleDeleteСhoicePlace(id, payData.price)

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
                <span>{renderInt(counterPrice)} ₽</span>
              </div>
              <div className='counter__column'>
                <span className='counter__text'>Сервисный сбор</span>
                <span>{renderInt(100)} ₽</span>
              </div>
              <div className='counter__column'>
                <span className='counter__text counter__info-text_type_total-amount'>Итого к оплате:</span>
                <span className='counter__text  counter__info-text_type_total-amount'>{renderInt(counterPrice + 100)} ₽</span>
              </div>
            </div>
            <Button 
              children='Оформить заказ'
              gradient={true}
              additionalClass='counter__column__add-button'
              onClick={handleOrder}
              disabled={paymentData.length === 0 ? true : false}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ChoiseThePlace;