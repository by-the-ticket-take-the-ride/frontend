function TicketIcon ({
  size = '24',
  disabled = true
}) {
  const isActive = disabled ? 'rgba(154, 154, 154, 1)' : '#8B52F6';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 7C4 6.44772 4.44772 6 5 6H21C21.5523 6 22 6.44772 22 7V8C20.8954 8 20 9.34315 20 11C20 12.6569 20.8954 14 22 14V15C22 15.5523 21.5523 16 21 16H5C4.44772 16 4 15.5523 4 15V14C5.10457 14 6 12.6569 6 11C6 9.34315 5.10457 8 4 8V7Z" fill={isActive}/>
      <path d="M2 8C2 7.44772 2.44772 7 3 7H19C19.5523 7 20 7.44772 20 8V9C18.8954 9 18 10.3431 18 12C18 13.6569 18.8954 15 20 15V16C20 16.5523 19.5523 17 19 17H3C2.44772 17 2 16.5523 2 16V15C3.10457 15 4 13.6569 4 12C4 10.3431 3.10457 9 2 9V8Z" fill={isActive} fillOpacity="0.5"/>      
    </svg>
  )
}

export default TicketIcon;