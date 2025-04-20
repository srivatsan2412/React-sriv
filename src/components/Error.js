import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong.</h2>
      <p>Please try again later.</p>
      <p>{error.data}</p>
      <img
        src="https://media.giphy.com/media/3o7aTnqz5X5jZ3e4cU/giphy.gif"
        alt="Error"
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default Error;
