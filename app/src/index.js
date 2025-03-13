import "./index.css";
import ReactDom from "react-dom";
import React from "react";

import App from "./App";

const tag = <strong>Olá react!</strong>;
ReactDom.render(<App />, document.getElementById("root"));
