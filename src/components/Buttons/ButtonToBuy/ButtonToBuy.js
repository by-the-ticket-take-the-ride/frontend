import Button from '../Button/Button';

function ButtonToBuy({ text, handleClick }) {

  return (
    <Button onClick={handleClick} additionalClass={'button-buy'} gradient={true} >
      {text}
    </Button>
  );
}

export default ButtonToBuy;