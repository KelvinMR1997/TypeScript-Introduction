export const TiposBasicos = () => {
  let nombre: string = "Kelvin";
  const edad = 35;
  // const estadoActivo: boolean = false;

  const poderes = ["Speed", "Fly", "Breath into the water"];
  //const arregloAny = []//Esto es un arreglo de tipo any, ts me permitirá meter cualquier mondá
  //const arregloString: string[] =[]//Esto es un arreglo de tipo string, ts NO  ME PERMITIRÁ METER CUALQUIER MONDÁ
  // Asi mismo funciona para cualquier otro tipo de dato.
  return (
    <>
      <h3>Tipos basicos</h3>
      {nombre}
      {edad}
      {poderes.join(",")}
    </>
  );
};
