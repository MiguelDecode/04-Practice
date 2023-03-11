import React from "react";
import "./Button.css";

function Button({ text, isClickBtn, handleEvent }) {
  return (
    <button
      className={isClickBtn ? "btn--click" : "btn--reset"}
      onClick={handleEvent}
    >
      {text}
    </button>
  );
}

export default Button;
