import React from "react";

import "./ErrorIndicator.css";
import icon from "../../close-circle-outline.svg";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">Upsss...!</span>
      <span>something has gone terribly wrong</span>
    </div>
  );
};

export default ErrorIndicator;
