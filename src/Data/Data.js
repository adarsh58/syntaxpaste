import react from './React.png'
import MongoD from './MongoD.png'
const kittenHeader = require('./React.png')
const Mongo = require('./MongoD.png')
export const Data = [
    {
        Category: "MongoDB",
        Concept: "Setup Connection",
        Img: Mongo,
        Code: [
            {
                Logic: "npm install -g nodemon and To nun package nodemon ./index.js",
                File: "Db.js",
                Syntax: `const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://adarsh:mko0(IJN@clusterone.5gdhtf1.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOne"


const connectToMongo = () => {

    mongoose.connect(mongoURI);
}
    
module.exports =connectToMongo; `
            },
            {
                Logic: "Importing along with Express",
                File: "Index.js",
                Syntax: `const connectToMongo = require('./db');
connectToMongo(); `
            }

        ]
    },
    {
        Category: "ReactJs",
        Concept: "Routes",
        Img: react,
        Code: [
            {
                Logic: "npm i react-router-dom",
                File: "App.js",
                Syntax: `import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App= ()=> {
  
  return (
    <NoteState>
      <BrowserRouter>
        <Routes>
          <Route exact path="/about" element={<div ><About/></div>} />
          <Route exact path="/login" element={<div ><Login/></div>} />
          <Route exact path="/signup" element={<div ><Signup /></div>} />
        </Routes>
      </BrowserRouter>

  );
}


export default App;`
            },
            {
                Logic: "Need to use <Link/> Tags with <To=page/>",
                File: "NavBar.js/Consuming Component",
                Syntax: `import React from 'react'
import { Link, useLocation ,useNavigate } from 'react-router-dom'
function Navbar(props) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">Navbar</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
            <div className="d-flex">
              <Link type="button" className="btn btn-outline-primary align" to="/login">Log in</Link>
              <Link type="button" className="btn btn-outline-success mx-3" to="/signup" >Sign up</Link>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar`
            }

        ]
    }
]