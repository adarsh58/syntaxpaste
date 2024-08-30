
export const Data = [
    {
        Category: REACT,
        Concept: "Use Callback",
        Img: reactImg,
        Code: [
            {
                Logic: "Without Callback - On click of Button in Counter, both instances of Counter are getting rendered from Index.jsx",
                File: "Index.jsx",
                Syntax: `import React, { useState } from 'react'
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
  return (
    <div className='container'>
        <Counter count={countone} onclickprops={handleCountOne}/>
        <Counter count={counttwo} onclickprops={handleCountTwo}/>
      
    </div>
  )
}

export default Index
`
            },{
                Logic: "Without Callback - On click of Button in Counter, both instances of Counter are getting rendered from Index.jsx",
                File: "Counter.jsx",
                Syntax: `import React,{memo} from 'react'


const Counter = ({onclickprops,count}) => {

  return (
    <div className='container'>
        <button onClick={onclickprops} className='btn btn-warning'>Click</button>
        <div>
            <p>{count}</p>
        </div>
    </div>
  )
}

export default memo(Counter)


`
            },{
                Logic: "With Callback - On click of Button in Counter,Only particular instances of Counter is getting rendered from Index.jsx",
                File: "Index.jsx",
                Syntax: `import React, { useCallback, useState } from 'react'
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


`
            }
        ]
    }

]