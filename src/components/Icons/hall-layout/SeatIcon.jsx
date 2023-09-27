import { useState } from "react";
import './SeatIcon.css'
import useSeatContext from "../../../hooks/useSeatContext";

function SeatIcon({
  blue,
  violet,
  red,
  grey,
  handleDel,
  seat, 
  row, 
  zone,
  price,
  handleСhoicePlace,
  id
}) {

  const [isActive, setIsActive] = useState(false);
  const { paymentData } = useSeatContext();

  const colors = [
    blue ? '#2BA6FF' : null,
    violet ? '#8B52F6' : null,
    red ? '#EA3057' : null,
    grey ? '#D9D9D9' : null
  ];

  const color = colors.filter((col) => col !== null);
  const handleClick = () => {
    setIsActive(!isActive)
    if (isActive) {
      handleDel(seat, row, zone, price)
    } else if(!isActive) {
      handleСhoicePlace(seat, row, zone, price, id)
    }
  }

  function handleIsActive () {
    return paymentData.some((ticket) => {
      return seat === ticket.seat && row === ticket.row && zone === ticket.zone
    })
  }

  return ( 
    <svg 
      width="21.6" 
      height="21.6"
      viewBox="0 0 21.6 21.6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className="seat-icon"
    >
      {handleIsActive() ? 
      <path 
        d="M2.90137 7.63916L10.4014 15.6392L20.4014 2.63916"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      /> :
      <circle cx="11.426" cy="11.4753" r="8.21311" fill={color}/> 
      }
    </svg>

   );
}

export default SeatIcon;