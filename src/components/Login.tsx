import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type LoginPayload = {
  username: string;
  nombre: string;
};

type AuthAction = { type: "Logout" } | { type: "Login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "Logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };

    case "Login":
      // const { nombre, username } = action.payload;
      return {
        // ...state
        validando: false,
        token: "ABC123",
        nombre: action.payload.nombre,
        username: action.payload.username,
      };

    default:
      return state;
  }
};
export const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "Logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "Login",
      payload: {
        nombre: "Kelvin",
        username: "Martinez",
      },
    });
  };

  const logOut = () => {
    dispatch({ type: "Logout" });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando</div>
      </>
    );
  }
  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado como: {nombre} </div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logOut}>
          LogOut
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
