import React from 'react'
import Syntax from '../CopySyntax/Syntax';
import {Data} from '../Data/Data'
import './Syntax.css'
const SyntaxContainer = () => {
   
  return (
    <div className='SyntaxContainer'>
       <div className='Syntax'>
      {Data.map((item)=>{
        
        return(
        <Syntax item={item} />
        )
      })}
         </div>
    </div>
  )
}

export default SyntaxContainer
