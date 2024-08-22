import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import './PrismEditor.css'
const PrismEditor=()=> {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
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
  );
}
export default PrismEditor