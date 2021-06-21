import { useUsuarios } from "../hooks/useUsuarios";

export const Usuarios = () => {
  const {
    renderItem,
    usuarios,
    // cargarUsuarios,
    paginaAnterior,
    paginSiguiente,
  } = useUsuarios();

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {
            // usuarios.map((usuario) => rederItem(usuario))
            usuarios.map(renderItem)
          }
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anteriores
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-primary" onClick={paginSiguiente}>
        Siguientes
      </button>
    </>
  );
};
