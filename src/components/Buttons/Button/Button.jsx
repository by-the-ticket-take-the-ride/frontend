import React from "react";
import "./Button.css";
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
  gradient,
  type,
  url,
  additionalClass,
}) => {
  const styles = [
    primary ? "button_type_primary" : null,
    primaryOutlined ? "button_type_primary-outlined" : null,
    disabled ? "button_type_disabled" : null,
    light ? "button_type_light" : null,
    lightOutlined ? "button_type_light-outlined" : null,
    dark ? "button_type_dark" : null,
    darkOutlined ? "button_type_dark-outlined" : null,
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
        >
          {children}
        </Link>
      );
    default:
      return (
        <button
          type={type}
          className={`button ${styleString} ${
            additionalClass ? additionalClass : ""
          }`}
          disabled={disabled}
        >
          {children}
        </button>
      );
  }
};

export default Button;
