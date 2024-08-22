import React from "react";
import react from '../Data/reactjs.png'
import './Card.css'
const Card = () => {
  return (
    <div className="card">
    <img src={react}/>
    <div className="card-body">
      <h5 className="card-title">React</h5>
      <p className="card-text">Router</p>
      <a className="card-text"><small className="text-body-secondary">Happy Coding.</small></a>
    </div>
  </div>
  );
};

export default Card;
