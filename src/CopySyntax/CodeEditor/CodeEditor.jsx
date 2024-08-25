import React from 'react'
import CodeModal from '../../MUI/Grid/CodeModal'

const CodeEditor = (props) => {

  return (
    <div>
        <CodeModal concept={props.concept} code={props.code}/>
    </div>
  )
}

export default CodeEditor
