function ButtonLike({ 
  extraClass,
  isActive,
  handleLike
}) {

  return ( 
    <button 
      type='button' 
      className={`button-like ${isActive ? 'button-like_active' : ''} ${extraClass}`} 
      onClick={handleLike}
    >
    </button>
   );
}

export default ButtonLike;