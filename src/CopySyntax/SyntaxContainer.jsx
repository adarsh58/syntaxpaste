import React from 'react'
import Card from './Card'
import {Data} from '../Data/Data'
import './Syntax.css'
const SyntaxContainer = () => {
   
  return (
    <div className='SyntaxContainer'>
      {Data.map((item)=>{
        return(
        <Card data={item}/> 
        )
      })}
    </div>
  )
}

export default SyntaxContainer
