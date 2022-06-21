import React from "react";
import "./button.css"

function Button({text, className}) {
  return (
    <div>
      <button className={className}>{text}</button>
    </div>
  );
}

export default Button;
