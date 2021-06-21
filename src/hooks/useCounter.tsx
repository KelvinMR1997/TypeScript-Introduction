import { useState } from "react";

export const useCounter = (inicial: number = 10) => {
  const [value, setValue] = useState(inicial);

  const acum = (numerator: number) => {
    setValue(value + numerator);
  };
  return {
    value,
    acum,
  };
};
