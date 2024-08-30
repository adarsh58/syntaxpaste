import React from "react";
import PrismEditor from "./PrismEditor";
import "./CopyCode.css";
import { Divider } from "@mui/material";

const CopyCode = ({ file, code, Logic }) => {
  return (
    <div className="modal-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-xs-12 file">
            {" "}
            <span className="File-Span">File</span> :{file}
            <Divider />
            <Divider />
            <Divider />
            <p className="Logic">{Logic}</p>
          </div>

          <div className="col-lg-9 col-md-9 col-xs-12 code">
            <PrismEditor codeText={code} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyCode;
