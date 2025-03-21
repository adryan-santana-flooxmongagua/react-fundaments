import "./App.css";
import React from "react";
import ReactDom from "react-dom";
import Userinfo from "./components/conditional/Userinfo";
import Parimp from "./components/conditional/Parimp";
import First from "./components/basic/First";
import StudentList from "./components/repetition/StudentList";
import ComParametro from "./components/basic/ComParametro";
import Fragment from "./components/basic/Fragmento";
import Aleatory from "./components/basic/Aleatory";
import Card from "./components/layout/Card";
import Family from "./components/basic/family";
import MemberFamily from "./components/basic/memberFamily";
import TableProduct from "./components/repetition/TableProduct";
import Fatherdirect from "./components/comunication/Fatherdirect";
import IndiretaPai from "./components/comunication/IndirectFatther";
import Input from "./components/forms/Input";
import Contador from "./components/counter/Counter";
import Mega from "./components/mega/Mega";

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos do React 2</h1>

      <div className="Cards">
        <Card titulo="#13 - Mega">
          <Mega qtde={8}></Mega>
        </Card>

        <Card titulo="#12 - Contador">
          <Contador numeroInicial={10}></Contador>
        </Card>

        <Card titulo="#11 - Componente Controlado (Input)">
          <Input></Input>
        </Card>

        <Card titulo="#10 - Comunicação Indireta">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#09 - Comunicação Direta">
          <Fatherdirect></Fatherdirect>
        </Card>

        <Card titulo="#08 - render condicional">
          <Parimp numero={20}> </Parimp>
          <Userinfo usuario={{ nome: "edk" }}></Userinfo>
        </Card>

        <Card titulo="#07 - produt">
          <TableProduct />
        </Card>

        <Card titulo="#06 - lista de alunos">
          <StudentList />
        </Card>

        <Card titulo="#05 - Comp Filho">
          <Family surname="lopez">
            <MemberFamily name="Pedro" />
            <MemberFamily name="Edk" />
            <MemberFamily name="Pifio" />
          </Family>
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
