import React from "react";
import PrismEditor from "./PrismEditor";
import './CopyCode.css'
const CopyCode = () => {
  return (
    <div className="modal-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-xs-12  file">Addition</div>
          <div className="col-lg-9 col-md-6 col-xs-12 code"><PrismEditor/></div>
        </div>
      </div>
    </div>
  );
};

export default CopyCode;
