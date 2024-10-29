import React from "react";
import "./index.css";

const Button = ({
  type = "button",
  onClick,
  className = "",
  children,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
