import React from 'react'
import './Syntax.css'
import Card from './Card'

const Syntax = (props) => {

  return (
    <div className="CardSyntax" >
      <Card data={props.item}/>
    </div>
  )
}

export default Syntax
