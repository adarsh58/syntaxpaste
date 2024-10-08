import React from "react";
import react from '../Data/reactjs.png'
import './Card.css'
import CodeEditor from './CodeEditor/CodeEditor'
const Card = (props) => {

  return (
    <div className="Card">
    <img src={props.data.Img}/>
    
    <div className="Card-body">
      <h5 className="Card-title">{props.data.Category}</h5>    
      <p className="Card-text">{props.data.Concept}</p>
      <CodeEditor concept={props.data.Concept} code={props.data.Code} />
      
    </div>
  
  </div>
  );
};

export default Card;
