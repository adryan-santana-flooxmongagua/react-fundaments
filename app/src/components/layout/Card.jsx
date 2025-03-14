import React from "react";
import "./Card.css";

export default (props) => {
  return (
    <div class="Card">
      <div className="title">{props.titulo}</div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  );
};
