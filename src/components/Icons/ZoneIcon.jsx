function ZoneIcon({
  blue,
  violet,
  red,
  grey,
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
      width='20' 
      height='20'
      viewBox='0 0 20 20'
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill={color}/>

    </svg>
  );
}

export default ZoneIcon;