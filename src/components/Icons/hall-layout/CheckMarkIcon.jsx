function CheckMarkIcon({
  red,
  blue,
  violet
}) {
  const colors = [
    blue ? '#2BA6FF' : null,
    violet ? '#8B52F6' : null,
    red ? '#EA3057' : null
  ]
  const color = colors.filter(color => color !== null)
  return ( 
    <svg width="21.9" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M2.90137 7.63916L10.4014 15.6392L20.4014 2.63916"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CheckMarkIcon;