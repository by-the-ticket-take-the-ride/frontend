import React from "react";

const CitySearch = ({ data, setSearchData }) => {
  const [value, setValue] = React.useState("");
  const onChangeInput = (evt) => {
    const { value } = evt.target;
    setValue(value);
    setSearchData(
      data.filter((item) =>
        item.title.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };

  return (
    <form className="city-search">
      <input
        type="text"
        className="city-search__input"
        onChange={onChangeInput}
        value={value}
      />
    </form>
  );
};

export default CitySearch;
