import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import './PrismEditor.css'
const PrismEditor=({codeText})=> {
  const [code, setCode] = React.useState(
    codeText
  );


  return (
    <>
    <Editor className='Editor'
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      disabled={true}
      style={{
        fontFamily: '"JetBrains","Fira code", "Fira Mono", monospace',
        fontSize:13
      }}
    />
    <div className="btn">   <button type="button" onClick={() =>  navigator.clipboard.writeText(`${code}`)} className="btn btn-outline-warning btn-sm">Click To Copy</button></div>
 
    </>
  );
}
export default PrismEditor