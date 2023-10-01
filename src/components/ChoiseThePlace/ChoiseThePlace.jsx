import { useEffect, useState } from "react";
import Button from "../Buttons/Button/Button";
import ButtonCross from "../Buttons/ButtonCross/ButtonCross";
import PlaceIcon from "../Icons/PlaceIcon";
import SceneIcon from "../Icons/SceneIcon";
import TimeIcon from "../Icons/TimeIcon";
import ZoneIcon from "../Icons/ZoneIcon";
import SeatIcon from "../Icons/hall-layout/SeatIcon";
import SeatIconDisabled from "../Icons/hall-layout/SeatIconDisabled";
import "./ChoiseThePlace.css";
import useSeatContext from "../../hooks/useSeatContext";
import { useNavigate } from "react-router-dom";
import * as supportFunction from "../../utils/supportFunction";

function ChoiseThePlace() {
  const {
    eventForChoisePlace,
    eventZone,
    tickets,
    setTotalOrder,
    isOpenPopap,
    setIsOpenPopap,
    paymentData,
    setPaymentData,
  } = useSeatContext();
  const [counterPrice, setCounterPrice] = useState(0);
  const [isSizeHallLayoutSmall, setIsSizeHallLayoutSmall] = useState(false);
  const navigate = useNavigate();

  const handleСhoicePlace = (numSeat, numRow, nameZone, zoneId, numPrice, idSeat) => {
    if (isPaid(numSeat, numRow, nameZone)) {
      return;
    } else {
      setCounterPrice((price) => price + numPrice);
      setPaymentData((el, id) => {
        return [
          ...paymentData,
          {
            eventId: eventForChoisePlace.id,
            seat: numSeat,
            row: numRow,
            zone: nameZone,
            zoneId: zoneId,
            price: numPrice,
            id: idSeat,
          },
        ];
      });
    }
  };

  const handleDeleteСhoicePlace = (id, numPrice) => {
    setPaymentData((currentEvent) => {
      return currentEvent.filter((event, index) => {
        return index !== id;
      });
    });

    setCounterPrice((price) => price - numPrice);
  };

  const handleDel = (seat, row, zone, price) => {
    setPaymentData((currentEvent) => {
      return currentEvent.filter((event) => {
        return seat !== event.seat || row !== event.row || zone !== event.zone;
      });
    });
    setCounterPrice((numPrice) => numPrice - price);
  };

  const renderColorZone = (id) => {
    switch (id) {
      case 1:
        return <ZoneIcon blue={true} />;
      case 2:
        return <ZoneIcon violet={true} />;
      case 3:
        return <ZoneIcon red={true} />;
      default:
        return <ZoneIcon blue={true} />;
    }
  };

  function renderColorSeat(zoneId, seat, row, zone, price, id) {
    switch (zoneId) {
      case 1:
        return (
          <SeatIcon
            price={price}
            seat={seat}
            row={row}
            zone={zone}
            zoneId={zoneId}
            handleDel={handleDel}
            handleСhoicePlace={handleСhoicePlace}
            blue={true}
            id={id}
            sizeBig={isSizeHallLayoutSmall}
          />
        );
      case 2:
        return (
          <SeatIcon
            price={price}
            seat={seat}
            row={row}
            zone={zone}
            zoneId={zoneId}
            handleDel={handleDel}
            handleСhoicePlace={handleСhoicePlace}
            violet={true}
            id={id}
            sizeBig={isSizeHallLayoutSmall}
          />
        );
      case 3:
        return (
          <SeatIcon
            price={price}
            seat={seat}
            row={row}
            zone={zone}
            zoneId={zoneId}
            handleDel={handleDel}
            handleСhoicePlace={handleСhoicePlace}
            red={true}
            id={id}
            sizeBig={isSizeHallLayoutSmall}
          />
        );
      default:
        return (
          <SeatIcon
            price={price}
            seat={seat}
            row={row}
            zone={zone}
            zoneId={zoneId}
            handleDel={handleDel}
            handleСhoicePlace={handleСhoicePlace}
            red={true}
            id={id}
            sizeBig={isSizeHallLayoutSmall}
          />
        );
    }
  }
  function renderValueSeat(seatValue, zoneId, seat, row, zone, price, id) {
    switch (seatValue) {
      case false:
        return renderColorSeat(zoneId, seat, row, zone, price, id);
      case true:
        return <SeatIconDisabled />;
      default:
        return <SeatIconDisabled />;
    }
  }

  function isPaid(numSeat, numRow, nameZone) {
    return tickets.some((ticket) => {
      return (
        ticket.seat === numSeat &&
        ticket.row === numRow &&
        ticket.zone_hall.name === nameZone
      );
    });
  }

  const declination = (numTicket, text, cases) => {
    return text[
      numTicket % 100 > 4 && numTicket % 100 < 20
        ? 2
        : cases[numTicket % 10 < 5 ? numTicket % 10 : 5]
    ];
  };

  const handleEnding = (numTicket) => {
    const text = ["билет", "билета", "билетов"];
    const cases = [2, 0, 1, 1, 1, 2];

    return declination(numTicket, text, cases);
  };

  const renderInt = (num) => {
    const numbFmt = new Intl.NumberFormat("ru-RU").format(num);
    return numbFmt;
  };

  function generateRandomFiveDigitNumber() {
    const min = 10000; // Минимальное пятизначное число
    const max = 99999; // Максимальное пятизначное число

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
  }

  const randomFiveDigitNumber = generateRandomFiveDigitNumber();

  const handleOrder = () => {
    if (counterPrice > 0) {
      setTotalOrder({
        totalSum: counterPrice + 100,
        tickets: paymentData,
        оrderNumber: randomFiveDigitNumber,
      });
      sessionStorage.setItem('totalOrder', JSON.stringify(
        {
          totalSum: counterPrice + 100,
          tickets: paymentData,
          оrderNumber: randomFiveDigitNumber,
          eventName: eventForChoisePlace?.name
        }))
      navigate("/order", { replace: true });
    }
  };

  const handleClose = () => {
    setPaymentData([]);
    setIsOpenPopap(!isOpenPopap);
  };

  const countSeat = (zones) => {
    const numberSeats = zones.reduce((prevVal, zone) => {
      return prevVal + zone.seat;
    }, 0);

    return numberSeats;
  };

  useEffect(() => {
    setIsSizeHallLayoutSmall(countSeat(eventZone) <= 108);
  }, [eventZone]);

  return (
    <div
      className={`choise-the-place ${
        isOpenPopap ? "choise-the-place_visible" : ""
      }`}
    >
      <div className="choise-the-place__container">
        <ButtonCross
          onClick={handleClose}
          black={true}
          additionalClass={"choise-the-place__close-button"}
        />
        <h1 className="choise-the-place__title">Выбор места</h1>
        <div className="event-info">
          <h2 className="event-info__title">{eventForChoisePlace?.name}</h2>
          <div className="event-info__info-column">
            <PlaceIcon />
            <span className="event-info__text">
              {eventForChoisePlace?.place?.city?.name},{" "}
              {eventForChoisePlace?.place?.name}
            </span>
          </div>
          <div className="event-info__info-column">
            <TimeIcon />
            <span className="event-info__text">
              {supportFunction.renderDate(eventForChoisePlace?.date_event)},{" "}
              {supportFunction.renderTime(eventForChoisePlace?.time_event)}
            </span>
          </div>
        </div>

        <section className="hall-layout choise-the-place__hall-layout">
          <div className="hall-layout__wrapper">
            <div className="location hall-layout__location">
              <div className="location__scene">
                {isSizeHallLayoutSmall ? (
                  <SceneIcon size="small" />
                ) : (
                  <SceneIcon size="big" />
                )}
              </div>
              <div className="location__zone-seats">
                <div
                  className={`location__seats ${
                    !isSizeHallLayoutSmall ? "location__seats_type_big" : ""
                  }`}
                >
                  {countSeat(eventZone) <= 108 ? (
                    eventZone.map((zone) => (
                      <div key={zone.id} className="location__zone">
                        {Array.from(Array(zone.row).keys()).map((row, i) => (
                          <div key={i} className="location__row">
                            <div className="location__column">
                              {Array.from(
                                Array(
                                  Math.floor(zone.seat / zone.row / 2)
                                ).keys()
                              ).map((seat, id) => (
                                <span key={id} className="location__seat">
                                  {renderValueSeat(
                                    isPaid(seat + 1, row + 1, zone.name),
                                    zone.id,
                                    seat + 1,
                                    row + 1,
                                    zone.name,
                                    zone.price,
                                    id + 1
                                  )}
                                </span>
                              ))}
                            </div>
                            <div className="location__column">
                              {Array.from(
                                Array(
                                  Math.floor(zone.seat / zone.row / 2)
                                ).keys()
                              ).map((seat, id) => {
                                return (
                                  <span key={id} className="location__seat">
                                    {renderValueSeat(
                                      isPaid(
                                        seat +
                                          1 +
                                          Math.floor(zone.seat / zone.row) / 2,
                                        row + 1,
                                        zone.name
                                      ),
                                      zone.id,
                                      seat +
                                        1 +
                                        Math.floor(zone.seat / zone.row) / 2,
                                      row + 1,
                                      zone.name,
                                      zone.price,
                                      id + 1
                                    )}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))
                  ) : (
                    <>
                      {eventZone[0] && (
                        <div className="sector">
                          <div className="zone zone_type_left">
                            {Array.from(Array(5).keys()).map((row2, numRow) => (
                              <div key={numRow} className="row left-row">
                                {Array.from(Array(4 + numRow).keys()).map(
                                  (seat, numSeat) => (
                                    <span key={numSeat}>
                                      {renderValueSeat(
                                        isPaid(
                                          numSeat + 1,
                                          numRow + 1,
                                          eventZone[0].name
                                        ),
                                        eventZone[0].id,
                                        numSeat + 1,
                                        numRow + 1,
                                        eventZone[0].name,
                                        eventZone[0].price,
                                        numSeat + 1
                                      )}
                                    </span>
                                  )
                                )}
                              </div>
                            ))}
                          </div>
                          <div className="zone zone_type_center">
                            {Array.from(Array(5).keys()).map((row, numRow) => (
                              <div key={numRow} className="row center-row">
                                {Array.from(Array(6 + numRow).keys()).map(
                                  (row, numSeat) => (
                                    <span key={numSeat}>
                                      {renderValueSeat(
                                        isPaid(
                                          numSeat + (5 + numRow),
                                          numRow + 1,
                                          eventZone[0].name
                                        ),
                                        eventZone[0].id,
                                        numSeat + (5 + numRow),
                                        numRow + 1,
                                        eventZone[0].name,
                                        eventZone[0].price,
                                        numSeat + 1
                                      )}
                                    </span>
                                  )
                                )}
                              </div>
                            ))}
                          </div>
                          <div className="zone zone_type_right">
                            {Array.from(Array(5).keys()).map((row, numRow) => (
                              <div key={numRow} className="row right-row">
                                {Array.from(Array(4 + numRow).keys()).map(
                                  (row, numSeat) => (
                                    <span key={numSeat}>
                                      {renderValueSeat(
                                        isPaid(
                                          numSeat + (11 + numRow),
                                          numRow + 1,
                                          eventZone[0].name
                                        ),
                                        eventZone[0].id,
                                        numSeat + (11 + numRow + numRow),
                                        numRow + 1,
                                        eventZone[0].name,
                                        eventZone[0].price,
                                        numSeat + 1
                                      )}
                                    </span>
                                  )
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {eventZone[1] && (
                        <div className="sector">
                          <div className="zone zone_type_left-second">
                            {Array.from(Array(1).keys()).map((row, numRow) => (
                              <div key={numRow} className="row left-row">
                                {Array.from(Array(7).keys()).map(
                                  (row, numSeat) => (
                                    <span key={numSeat}>
                                      {renderValueSeat(
                                        isPaid(
                                          numSeat + 1,
                                          numRow + 1,
                                          eventZone[1].name
                                        ),
                                        eventZone[1].id,
                                        numSeat + 1,
                                        numRow + 1,
                                        eventZone[1].name,
                                        eventZone[1].price,
                                        numSeat + 1
                                      )}
                                    </span>
                                  )
                                )}
                              </div>
                            ))}
                            {Array.from(Array(2).keys()).map((row, numRow) => (
                              <div key={numRow} className="row left-row">
                                {Array.from(Array(6).keys()).map(
                                  (row, numSeat) => (
                                    <span key={numSeat}>
                                      {renderValueSeat(
                                        isPaid(
                                          numSeat + 1,
                                          numRow + 2,
                                          eventZone[1].name
                                        ),
                                        eventZone[1].id,
                                        numSeat + 1,
                                        numRow + 2,
                                        eventZone[1].name,
                                        eventZone[1].price,
                                        numSeat + 1
                                      )}
                                    </span>
                                  )
                                )}
                              </div>
                            ))}
                            {eventZone[2] && (
                              <>
                                {Array.from(Array(2).keys()).map(
                                  (row, numRow) => (
                                    <div key={numRow} className="row left-row">
                                      {Array.from(Array(5).keys()).map(
                                        (row, numSeat) => (
                                          <span key={numSeat}>
                                            {renderValueSeat(
                                              isPaid(
                                                numSeat + 1,
                                                numRow + 1,
                                                eventZone[2].name
                                              ),
                                              eventZone[2].id,
                                              numSeat + 1,
                                              numRow + 1,
                                              eventZone[2].name,
                                              eventZone[2].price,
                                              numSeat + 1
                                            )}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  )
                                )}
                                {Array.from(Array(1).keys()).map(
                                  (row, numRow) => (
                                    <div key={numRow} className="row left-row">
                                      {Array.from(Array(4).keys()).map(
                                        (row, numSeat) => (
                                          <span key={numSeat}>
                                            {renderValueSeat(
                                              isPaid(
                                                numSeat + 1,
                                                numRow + 3,
                                                eventZone[2].name
                                              ),
                                              eventZone[2].id,
                                              numSeat + 1,
                                              numRow + 3,
                                              eventZone[2].name,
                                              eventZone[2].price,
                                              numSeat + 1
                                            )}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  )
                                )}
                                {Array.from(Array(1).keys()).map(
                                  (row, numRow) => (
                                    <div key={numRow} className="row left-row">
                                      {Array.from(Array(3).keys()).map(
                                        (row, numSeat) => (
                                          <span key={numSeat}>
                                            {renderValueSeat(
                                              isPaid(
                                                numSeat + 1,
                                                numRow + 4,
                                                eventZone[2].name
                                              ),
                                              eventZone[2].id,
                                              numSeat + 1,
                                              numRow + 4,
                                              eventZone[2].name,
                                              eventZone[2].price,
                                              numSeat + 1
                                            )}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  )
                                )}
                              </>
                            )}
                          </div>
                          <div className="zone zone_type_center">
                            {Array.from(Array(1).keys()).map((row, numRow) => (
                              <div key={numRow} className="row center-row">
                                {Array.from(Array(12 + numRow).keys()).map(
                                  (row, numSeat) => (
                                    <span key={numSeat}>
                                      {renderValueSeat(
                                        isPaid(
                                          numSeat + (8 + numRow),
                                          numRow + 1,
                                          eventZone[1].name
                                        ),
                                        eventZone[1].id,
                                        numSeat + (8 + numRow),
                                        numRow + 1,
                                        eventZone[1].name,
                                        eventZone[1].price,
                                        numSeat + 1
                                      )}
                                    </span>
                                  )
                                )}
                              </div>
                            ))}
                            {Array.from(Array(5).keys()).map((row, numRow) => (
                              <div key={numRow} className="row center-row">
                                {Array.from(Array(13 + numRow).keys()).map(
                                  (row, numSeat) => (
                                    <span key={numSeat}>
                                      {renderValueSeat(
                                        isPaid(
                                          numSeat + 7,
                                          numRow + 2,
                                          eventZone[1].name
                                        ),
                                        eventZone[1].id,
                                        numSeat + 7,
                                        numRow + 2,
                                        eventZone[1].name,
                                        eventZone[1].price,
                                        numSeat + 1
                                      )}
                                    </span>
                                  )
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="zone zone_type_right-second ">
                            {Array.from(Array(1).keys()).map((row, numRow) => (
                              <div key={numRow} className="row right-row">
                                {Array.from(Array(7).keys()).map(
                                  (row, numSeat) => (
                                    <span key={numSeat}>
                                      {renderValueSeat(
                                        isPaid(
                                          numSeat + 20,
                                          numRow + 1,
                                          eventZone[1].name
                                        ),
                                        eventZone[1].id,
                                        numSeat + 20,
                                        numRow + 1,
                                        eventZone[1].name,
                                        eventZone[1].price,
                                        numSeat + 1
                                      )}
                                    </span>
                                  )
                                )}
                              </div>
                            ))}
                            {Array.from(Array(2).keys()).map((row, numRow) => (
                              <div key={numRow} className="row right-row">
                                {Array.from(Array(6).keys()).map(
                                  (row, numSeat) => (
                                    <span key={numSeat}>
                                      {renderValueSeat(
                                        isPaid(
                                          numSeat + 20 + numRow,
                                          numRow + 2,
                                          eventZone[1].name
                                        ),
                                        eventZone[1].id,
                                        numSeat + 20 + numRow,
                                        numRow + 2,
                                        eventZone[1].name,
                                        eventZone[1].price,
                                        numSeat + 1
                                      )}
                                    </span>
                                  )
                                )}
                              </div>
                            ))}
                            {eventZone[2] && (
                              <>
                                {Array.from(Array(2).keys()).map(
                                  (row, numRow) => (
                                    <div key={numRow} className="row right-row">
                                      {Array.from(Array(5).keys()).map(
                                        (row, numSeat) => (
                                          <span key={numSeat}>
                                            {renderValueSeat(
                                              isPaid(
                                                numSeat + 24,
                                                numRow + 1,
                                                eventZone[2].name
                                              ),
                                              eventZone[2].id,
                                              numSeat + 24,
                                              numRow + 1,
                                              eventZone[2].name,
                                              eventZone[2].price,
                                              numSeat + 1
                                            )}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  )
                                )}
                                {Array.from(Array(1).keys()).map(
                                  (row, numRow) => (
                                    <div key={numRow} className="row right-row">
                                      {Array.from(Array(4).keys()).map(
                                        (row, numSeat) => (
                                          <span key={numSeat}>
                                            {renderValueSeat(
                                              isPaid(
                                                numSeat + 5,
                                                numRow + 3,
                                                eventZone[2].name
                                              ),
                                              eventZone[2].id,
                                              numSeat + 5,
                                              numRow + 3,
                                              eventZone[2].name,
                                              eventZone[2].price,
                                              numSeat + 1
                                            )}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  )
                                )}
                                {Array.from(Array(1).keys()).map(
                                  (row, numRow) => (
                                    <div key={numRow} className="row right-row">
                                      {Array.from(Array(3).keys()).map(
                                        (row, numSeat) => (
                                          <span key={numSeat}>
                                            {renderValueSeat(
                                              isPaid(
                                                numSeat + 4,
                                                numRow + 4,
                                                eventZone[2].name
                                              ),
                                              eventZone[2].id,
                                              numSeat + 4,
                                              numRow + 4,
                                              eventZone[2].name,
                                              eventZone[2].price,
                                              numSeat + 1
                                            )}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  )
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      {eventZone[2] && (
                        <div className="sector sector_type_additional">
                          {Array.from(Array(2).keys()).map((row, numRow) => (
                            <div key={numRow} className="row right-row">
                              {Array.from(Array(18).keys()).map(
                                (row, numSeat) => (
                                  <span key={numSeat}>
                                    {renderValueSeat(
                                      isPaid(
                                        numSeat + 6,
                                        numRow + 1,
                                        eventZone[2].name
                                      ),
                                      eventZone[2].id,
                                      numSeat + 6,
                                      numRow + 1,
                                      eventZone[2].name,
                                      eventZone[2].price,
                                      numSeat + 1
                                    )}
                                  </span>
                                )
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="hall-layout__about-zones">
              {eventZone.map((zoneElem, id) => (
                <div key={id} className="sector-element">
                  {renderColorZone(zoneElem.id)}
                  <span className="sector-element__text sector-element__text_type_zone">
                    {zoneElem.name}
                  </span>
                  <span className="sector-element__text sector-element__text_type_price">
                    {renderInt(zoneElem.price)} ₽
                  </span>
                </div>
              ))}
            </div>
          </div>

          {paymentData.length > 0 && (
            <div className="counter choise-the-place__counter">
              <h3 className="counter__title">Билеты</h3>
              <div className="counter__amount-list">
                {paymentData.map((payData, id) => {
                  return (
                    <div key={id} className="counter__seat-info">
                      <div className="counter__column">
                        <span className="counter__text counter__text_type_zone">
                          {payData.zone}&nbsp;
                        </span>
                        <span className="counter__text">
                          ряд {payData.row},&nbsp;
                        </span>
                        <span className="counter__text">
                          {" "}
                          место {payData.seat}{" "}
                        </span>
                      </div>
                      <div className="counter__column">
                        <span className="counter__text">
                          {renderInt(payData.price)} ₽
                        </span>
                        <ButtonCross
                          onClick={() => {
                            handleDeleteСhoicePlace(id, payData.price);
                          }}
                          additionalClass="counter__cross-button"
                          red={true}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="counter__amount-info">
                <div className="counter__column">
                  <span className="counter__text">
                    {paymentData.length} {handleEnding(paymentData.length)} на
                    сумму
                  </span>
                  <span>{renderInt(counterPrice)} ₽</span>
                </div>
                <div className="counter__column">
                  <span className="counter__text">Сервисный сбор</span>
                  <span>{renderInt(100)} ₽</span>
                </div>
                <div className="counter__column">
                  <span className="counter__text counter__info-text_type_total-amount">
                    Итого к оплате:
                  </span>
                  <span className="counter__text  counter__info-text_type_total-amount">
                    {renderInt(counterPrice + 100)} ₽
                  </span>
                </div>
              </div>
              <Button
                children="Оформить заказ"
                gradient={true}
                additionalClass="counter__column__add-button"
                onClick={handleOrder}
                disabled={paymentData.length === 0 ? true : false}
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default ChoiseThePlace;
