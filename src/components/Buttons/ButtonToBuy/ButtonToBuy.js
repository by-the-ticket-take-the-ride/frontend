import Button from '../Button/Button';

function ButtonToBuy({text}) {

  return (
    <Button additionalClass={'button-buy'} gradient={true} >
        {text}
    </Button>
   );
}

export default ButtonToBuy;