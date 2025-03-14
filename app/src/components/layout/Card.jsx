import React from "react";
import "./Card.css";

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

  return (
    <div class="Card" style={cardStyle}>
      <div className="title">{props.titulo}</div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  );
};
