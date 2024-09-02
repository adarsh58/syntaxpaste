
export const Data = [
    {
        Category: REACT,
        Concept: "Index DB to store data in browser/Disk",
        Img: reactImg,
        Code: [
            {
                Logic: "npm install react-indexed-db-hook npm i react-indexed-db",
                File: "DBConfig.js",
                Syntax: `export const DBConfig = {
    name: "CartMe",
    version: 1,
    objectStoresMeta: [
      {
        store: "cart",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          { name: "name", keypath: "name", options: { unique: false } },
          { name: "pid", keypath: "pid", options: { unique: false } },
        ],
      },
    ],
  }`
            },{
                Logic: "App root",
                File: "Index.jsx",
                Syntax: `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DBConfig } from "../src/IndexDb/Dbconfig";
import { initDB } from "react-indexed-db-hook";

initDB(DBConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
            },
            {
              Logic: "Usage",
              File: "App.jsx",
              Syntax: `import React, { useState,useEffect } from "react";
import { useIndexedDB } from "react-indexed-db-hook";
import "./Shop.css";
const Shop = () => {
  const { add,clear,getAll  } = useIndexedDB("cart");

  const [note, setNote] = useState({ name: "", pid: ""});
  const [noteDb, setNoteDb] = useState({ name: "", pid: ""});
 
  useEffect(() => {
    getAll().then((personsFromDB) => {
      setNoteDb(personsFromDB)
    });
  }, []);
 
  const GetAll=()=>{
    getAll().then((personsFromDB) => {
      setNoteDb(personsFromDB)
     });
  }
  const Add=()=>{
  
    add({ name: note.name, pid: note.pid }).then(
      (event) => {
        GetAll();
   
      },
      (error) => {
        console.log("Error",error);
      },
    );
  }
  const Clear=()=>{
    clear().then(() => {
      setNoteDb([])
      
    });
    setNote({ name: "", pid: ""})
  } 
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(note,note.length)
}
  return (
    <div className="container">
    
      <div className="form">
        <div className="name">
          <label>name</label>
          <input onChange={onChange} name="name" type="text" value={note.name}></input>
        </div>
        <div className="pid">
          <label>PId</label>
          <input onChange={onChange} name="pid" type="text" value={note.pid}></input>
        </div>
        <div className="pid">
         <button onClick={GetAll}>get all</button>
         <button onClick={Add} >add</button>
         <button onClick={Clear}>clear</button>
        
        </div>
        <ul>
        {
           noteDb.length>0 && noteDb.map((e,i)=>{
                return (<li>name : {e.name} Id : {e.pid}</li>)
          })
        }
        </ul>
  
      </div>
    </div>
  );
};

export default Shop;
`
          }
        ]
    }

]