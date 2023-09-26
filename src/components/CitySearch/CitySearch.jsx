import React, { useEffect } from "react";
import useFormValid from "../../hooks/useFormValid";
import usePopupContext from "../../hooks/usePopupContext";

const CitySearch = ({ cityData, setData }) => {
  const { inputValues, handleInputChange } = useFormValid();
  const { setIsInputCityNameEmpty } = usePopupContext();

  useEffect(() => {
    setData([
      {
        letter: cityData?.filter((item) => {
          return item.name
            .toLowerCase()
            .startsWith(inputValues?.cityName?.toLowerCase());
        })[0]?.name[0],
        cities: cityData?.filter((item) => {
          return item.name
            .toLowerCase()
            .startsWith(inputValues?.cityName?.toLowerCase());
        }),
      },
    ]);
    if (inputValues.cityName?.length > 0) {
      setIsInputCityNameEmpty(false);
    } else {
      setIsInputCityNameEmpty(true);
    }
  }, [inputValues]);

  return (
    <form className="city-search">
      <input
        type="text"
        name="cityName"
        className="city-search__input"
        onChange={handleInputChange}
        value={inputValues.cityName || ""}
      />
    </form>
  );
};

export default CitySearch;
