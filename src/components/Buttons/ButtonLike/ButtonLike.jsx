import './ButtonLike.css'

function ButtonLike({ 
  extraClass,
  isActive,
  handleLike
}) {

  return ( 
    <button 
      type='button' 
      className={`button ${isActive ? 'button_active' : ''} ${extraClass}`} 
      onClick={handleLike}
    >
    </button>
   );
}

export default ButtonLike;