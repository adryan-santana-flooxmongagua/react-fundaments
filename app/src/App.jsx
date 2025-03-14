import "./App.css";
import React from "react";
import ReactDom from "react-dom";
import First from "./components/basic/First";
import ComParametro from "./components/basic/ComParametro";
import Fragment from "./components/basic/Fragmento";
import Aleatory from "./components/basic/Aleatory";
import Card from "./components/layout/Card";
import Family from "./components/basic/family";

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos do React 2</h1>

      <div className="Cards">
        <Card titulo="#05 - Comp Filho">
          <Family surname="lopez"/>
        </Card>

          <Card titulo="#04 - Desafio Aleatorio">
          <Aleatory min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento">
          <Fragment />
        </Card>

        <Card titulo="#02 - Com Parâmetro">
          <ComParametro
            titulo="Situação do Aluno"
            subtitulo="Lopez"
            nota={9.3}
          />
        </Card>

        <Card titulo="#01 - Primeiro">
          <First />
        </Card>
      </div>
    </div>
  );
};
