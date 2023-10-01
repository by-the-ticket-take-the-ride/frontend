import { useRef } from "react";
import useUserContext from "../../../../hooks/useUserContext";

function InputPhoneMask ({extraClass}) {
  const inputCard = useRef();
  const { currentUser } = useUserContext();
  const { setInputTelValue} = useUserContext()

  const handleTelRender = (val) => {
    let numPhone = `+${val?.substring(1, 2)} (${val?.substring(2, 5)}) ${val?.substring(5, 8)}-${val?.substring(8, 10)}-${val?.substring(10, 12)}`;
  
    numPhone = numPhone.trim();
    return numPhone
  }
  const handleChange = (evt) => {
      const cardValue = inputCard.current.value
      // удалает все что не число
      .replace(/\D/g, '')
      .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  
      inputCard.current.value = !cardValue[2]
        ? cardValue[1] : `+${cardValue[1] = 7} (${cardValue[2]})${`${cardValue[3] ? `-${cardValue[3]}` : ''}`}${`${cardValue[4] ? `-${cardValue[4]}-${cardValue[5]}` : ''}`}`;
      const numbers = inputCard.current.value.replace(/(\D)/g, '');
      setInputTelValue(numbers);
  };
  return (
    <>
      <input defaultValue={currentUser.phone ? handleTelRender(currentUser.phone) : ''} name="phone" ref={inputCard} className={extraClass} type="tel" onChange={handleChange} placeholder='+7 (000) 000-00-00'/>
    </>
  );
};

export default InputPhoneMask;