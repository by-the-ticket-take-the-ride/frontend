function SeatIcon({
  blue,
  violet,
  red,
  grey
}) {

  const colors = [
    blue ? '#2BA6FF' : null,
    violet ? '#8B52F6' : null,
    red ? '#EA3057' : null,
    grey ? '#D9D9D9' : null
  ];

  const color = colors.filter((col) => col !== null);
  return ( 
    <svg 
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8.5" r="6" fill={color}/>
    </svg>

   );
}

export default SeatIcon;