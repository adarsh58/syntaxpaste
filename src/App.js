import React, { useState } from 'react'
import './App.css';
import Heading from './Component/Home/Heading';
import Info from './Component/Info/Info';
import NavBar from './Component/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SyntaxContainer from './CopySyntax/SyntaxContainer';
import { Data } from "../src/Data/Data";
function App() {
  const [syntaxData, setSyntaxData] = useState(Data);
  //const [searchVal, setSearchVal] = useState("");
  // const handleSearch=()=> {
  //   if (searchVal === "") { setSyntaxData(Data); return; }
  //   const filterBySearch = Data.filter((item) => {
  //       if (item.Concept.toLowerCase()
  //           .includes(searchVal.toLowerCase())) { return item; }
  //   })
  //   setSyntaxData(filterBySearch);
  // }
  const onchangeSearch = (searchVal) => {
    if (searchVal === "" || searchVal === undefined) { setSyntaxData(Data); return; }
    const filterBySearch = Data.filter((item) => {
      if (item.Concept.toLowerCase()
        .includes(searchVal.toLowerCase())) { return item; }
    })
    setSyntaxData(filterBySearch);

  }



  return (
    <div className="App">

      <BrowserRouter>
        <NavBar onchangeSearch={onchangeSearch} />
        <Routes>
          <Route exact path="/" element={<><SyntaxContainer Data={syntaxData} /></>} />
          <Route exact path="/aboutus" element={<> <div className="container">
            <Heading />
            <Info />
          </div> </>} />
          <Route exact path="/syntax" element={<><SyntaxContainer Data={syntaxData} /></>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
