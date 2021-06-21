import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
  const { value, acum } = useCounter(150);

  return (
    <>
      <h3>
        Contador Con Hook <small></small>
        <button
          className="btn btn-primary m-3"
          //   onClick={() => setValue(value + 1)}
          onClick={() => acum(+1)}
        >
          +1
        </button>
        <button className="btn btn-primary" onClick={() => acum(-1)}>
          -1
        </button>
      </h3>

      <h1>{value}</h1>
    </>
  );
};
