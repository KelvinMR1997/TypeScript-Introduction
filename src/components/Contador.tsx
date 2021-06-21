import React, { useState } from "react";

export const Contador = () => {
  const [value, setValue] = useState(0);

  // const acum = (numerator: number) => {
  //   setValue(value + numerator);
  // };

  return (
    <>
      <h3>
        Contador <small></small>
        <button
          className="btn btn-primary m-3"
          onClick={() => setValue(value + 1)}
        >
          +1
        </button>
        <button className="btn btn-primary" onClick={() => setValue(value - 1)}>
          -1
        </button>
      </h3>

      <h1>{value}</h1>
    </>
  );
};
