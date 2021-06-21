export const Funciones = () => {
  const sumar = (n1: number, n2: number): number => {
    return n1 + n2;
  };
  return (
    <>
      <h1>Funciones</h1>
      <span>El resultado es : {sumar(1, 2)}</span>
    </>
  );
};
