//Las interfaces solo sirven para poner reglas de validación a un objeto
//Las interfaces son un molde para la creación de un objeto
interface Persona {
  nombreCompleto: string;
  edad: number;
  //   direccion: object;
  direccion: {
    pais: string;
    casaNo: number;
  };
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Kelvin",
    edad: 23,
    direccion: {
      pais: "Colombia",
      casaNo: 21,
    },
  };
  return (
    <>
      <code>
        {/* Replacer es el segundo paramatro que recibe JSON.Stringify recibe como parametros las llaves que quieras filtrar, se le da un null para que devuelva todo de un solo meque */}
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
