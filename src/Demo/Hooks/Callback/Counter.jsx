import React,{memo} from 'react'


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
