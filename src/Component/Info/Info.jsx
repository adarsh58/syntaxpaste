import React from "react";


const Info = () => {
  return (

    <div className="row mb-2">
      <div className="col-md-6 ">
        <div className="row g-0 border rounded-3 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative text-light bg-dark ">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary-emphasis">
              Why Us
            </strong>
            <h3 className="mb-0">Copy-Plug-Play</h3>
            <div className="mb-1 text-body-secondary">22-Aug-24</div>
            <p className="card-text mb-auto">
              The thrill of copying code syntax directly and plugging it into
              the editor in no time! With the power of code snippet management,
              you can quickly copy and paste code snippets from your favorite
              platforms, documentation, or online communities. This saves you
              from typing out the entire code block, reducing errors and
              increasing productivity. Simply highlight the code snippet, copy
              it, and then paste it into your editor - voilà! Your code is ready
              to run, and you can focus on debugging and refining it..
            </p>
          </div>
          <div className="col-auto d-none d-lg-block my-3"></div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded-3 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative text-light bg-dark">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success-emphasis">
              Why us again
            </strong>
            <h3 className="mb-0">No Documentation</h3>
            <div className="mb-1 text-body-secondary">22-Aug-24</div>
            <p className="mb-auto">
              Writing code without reading documentation is a common practice
              among developers, especially when working on a familiar project or
              library. This approach can be efficient as it allows developers to
              quickly get started and make progress without interruptions.
              However, it may lead to errors or misunderstandings if the code is
              complex or relies on specific features or APIs. To mitigate this
              risk, developers should at least skim through the documentation to
              get an overview of the code's structure and functionality, and
              then revisit the documentation as needed to clarify specific
              issues or optimize their code.
            </p>
          </div>
          <div className="col-auto d-none d-lg-block my-3"></div>
        </div>
      </div>
    </div>
 
  );
};

export default Info;
