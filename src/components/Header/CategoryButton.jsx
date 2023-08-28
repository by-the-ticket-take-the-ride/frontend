import React from "react";
import "./CategoryButton.scss";
const CategoryButton = ({ image, text }) => {
  return (
    <div className="category-button">
      <img src={image} alt="#" className="category-button__image" />
      <span className="category-button__text">{text}</span>
    </div>
  );
};

export default CategoryButton;
