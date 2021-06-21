import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const renderItem = ({
    id,
    first_name,
    last_name,
    email,
    avatar,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <th>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 35,
              borderRadius: 100,
            }}
          />
        </th>
        <th>
          {first_name} {last_name}
        </th>
        <th>{email}</th>
      </tr>
    );
  };

  const cargarUsuarios = async () => {
    try {
      const resp = await reqResApi.get<ReqResListado>("/users", {
        params: {
          page: paginaRef.current,
        },
      });

      if (resp.data.data.length > 0) {
        setUsuarios(resp.data.data);
      } else {
        paginaRef.current--;
        Swal.fire({
          title: "Advertencia!",
          text: "No se encontraron más datos",
          icon: "warning",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const paginSiguiente = async () => {
    paginaRef.current++;
    cargarUsuarios();
  };
  const paginaAnterior = async () => {
    if (paginaRef.current > 1) paginaRef.current--;
    cargarUsuarios();
  };

  return {
    paginaAnterior,
    paginSiguiente,
    renderItem,
    cargarUsuarios,
    usuarios,
  };
};
