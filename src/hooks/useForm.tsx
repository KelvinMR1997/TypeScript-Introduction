import { useState } from "react";

export const useForm = <T extends object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  const textOnChange = (value: string, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  return {
    textOnChange,
    formulario: state,
    ...state,
  };
};
