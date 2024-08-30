import React, { useCallback, useState } from 'react'
import Counter from './Counter';

const Index = () => {
    const[countone,setcountOne]=useState(0);
    const[counttwo,setcountTwo]=useState(0);
    const handleCountOne =()=>{
      
        setcountOne(countone=>countone+1)
    }
    const handleCountTwo =()=>{
        setcountTwo(counttwo=>counttwo+1)
    }

    const memorizedOne =useCallback(()=>handleCountOne(),[countone]);
    const memorizedTwo =useCallback(()=> handleCountTwo(),[counttwo])

  return (
    <div className='container'>
        <Counter count={countone} onclickprops={memorizedOne}/>
        <Counter count={counttwo} onclickprops={memorizedTwo}/>
    </div>
  )
}

export default Index
