import React from "react";

const BackendErrorMessage = ({ backendError }) => {
  // for (const [key, value] of Object.entries(backendError)) {
  //   return <div className="error-messages">{`${key} error: ${value}`}</div>;
  // }
  const errorMessages = Object.keys(backendError).map((name) => {
    const messages = backendError[name].join(" ");
    return `${name} ${messages}`;
  });
  return (
    <ul className="error-messages">
      {errorMessages.map((errorMessage) => {
        return <li key={errorMessage}>{errorMessage}</li>;
      })}
    </ul>
  );
};

export default BackendErrorMessage;
