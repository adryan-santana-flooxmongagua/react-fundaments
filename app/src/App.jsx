import React from "react";
import ReactDom from "react-dom";
import First from "./components/basic/First";
import ComParametro from "./components/basic/ComParametro";
import Fragment from "./components/basic/Fragmento";

export default () => {
  return (
    <div id="app">
      <h1>Fundamentos do React 2</h1>
      <Fragment />
      <ComParametro titulo="Situação do Aluno" subtitulo="Lopez" nota={9.3} />
      <First />
    </div>
  );
};
