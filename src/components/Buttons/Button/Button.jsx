import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  primary,
  primaryOutlined,
  disabled,
  light,
  lightOutlined,
  dark,
  darkOutlined,
  grayOutlined,
  gradient,
  type,
  url,
  additionalClass,
  onClick,
}) => {
  const styles = [
    primary ? "button_type_primary" : null,
    primaryOutlined ? "button_type_primary-outlined" : null,
    disabled ? "button_type_disabled" : null,
    light ? "button_type_light" : null,
    lightOutlined ? "button_type_light-outlined" : null,
    dark ? "button_type_dark" : null,
    darkOutlined ? "button_type_dark-outlined" : null,
    grayOutlined ? "button_type_gray-outlined" : null,
    gradient ? "button_type_gradient" : null,
  ];
  const style = styles.filter((style) => style !== null);
  const styleString = style.join(" ");

  switch (type) {
    case "link":
      return (
        <Link
          to={url}
          className={`button ${styleString} ${
            additionalClass ? additionalClass : ""
          }`}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    case "submit":
      return (
        <button
          type="submit"
          className={`button ${styleString} ${
            additionalClass ? additionalClass : ""
          }`}
          disabled={disabled}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          type="button"
          className={`button ${styleString} ${
            additionalClass ? additionalClass : ""
          }`}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};

export default Button;
