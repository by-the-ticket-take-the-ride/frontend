import Button from '../Button/Button';
import './ButtonToBuy.css'

function ButtonToBuy({text}) {

  return (
    <Button gradient={true} additionalClass={'button-buy'}>
        {text}
    </Button>
   );
}

export default ButtonToBuy;