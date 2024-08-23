import React from "react";
import react from '../Data/reactjs.png'
import './Card.css'
import CodeEditor from './CodeEditor/CodeEditor'
const Card = (props) => {
  
  return (
    <div className="card">
    <img src={react}/>
    
    <div className="card-body">
      <h5 className="card-title">{props.data.Category}</h5>
      
      <p className="card-text">{props.data.Concept}</p>
      <CodeEditor code={props.data.Code} c={props.data.Category}/>
      
    </div>
  
  </div>
  );
};

export default Card;
