function TimeIcon({
  size = '24'
}) {
  return ( 
    <svg 
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 19C16.6421 19 20 15.6421 20 11.5C20 7.35786 16.6421 4 12.5 4C8.35786 4 5 7.35786 5 11.5C5 15.6421 8.35786 19 12.5 19Z" stroke="#8B52F6"/>
      <path d="M13 6V12H9" stroke="#8B52F6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default TimeIcon;