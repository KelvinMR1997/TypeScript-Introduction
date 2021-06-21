// import React from "react";
import { Formularios } from "./components/Formularios";
import { ContadorConHook } from "./components/ContadorConHook";
import { Contador } from "./components/Contador";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";
import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";

const App = () => {
  return (
    <div>
      <h1>Introducción a TS</h1>
      <Formularios></Formularios>
      <Usuarios></Usuarios>
      <Login></Login>
      <ContadorConHook></ContadorConHook>
      <Contador></Contador>
      <Funciones></Funciones>
      <TiposBasicos></TiposBasicos>
      <ObjetosLiterales></ObjetosLiterales>
    </div>
  );
};

export default App;
