import React from "react";
import Syntax from "../CopySyntax/Syntax";
import "./Syntax.css";
const SyntaxContainer = (props) => {

  return (
    <div className="SyntaxContainer">
      <div className="Syntax">
        {props.Data && props.Data.map((item) => {
          return <Syntax item={item} />;
        })}
      </div>
    </div>
  );
};

export default SyntaxContainer;
