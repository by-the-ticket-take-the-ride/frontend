import { useContext } from "react";
import { SeatContext } from "../constext/SeatContext";


function useSeatContext() {
  const seatContextValue = useContext(SeatContext)
  return { ...seatContextValue}
}

export default useSeatContext;