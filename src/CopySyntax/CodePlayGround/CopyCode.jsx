import React from "react";
import PrismEditor from "./PrismEditor";
import './CopyCode.css'

const CopyCode = ({file,code}) => {

  return (
   
    <div className="modal-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-xs-12 file">{file}</div>
          <div className="col-lg-9 col-md-9 col-xs-12 code"><PrismEditor codeText={code}/></div>
         
        </div>
      </div>
    </div>
  );
};

export default CopyCode;
