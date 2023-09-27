import './ButtonCross.css';

function ButtonCross( {
  additionalClass,
  red,
  black,
  onClick
}) {
  const colors = [
    red ? 'red' : null,
    black ? 'black' : null
  ];
  const color = colors.filter(color => color !== null)
  return ( 
    <button onClick={onClick} className={`button-cross ${additionalClass} button-cross_color_${color}`}  type="button">
      
    </button>
   );
}

export default ButtonCross;