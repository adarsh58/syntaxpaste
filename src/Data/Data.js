import react from './React.png'
import MongoD from './MongoD.png'
const kittenHeader = require('./React.png')
const Mongo = require('./MongoD.png')

const REACT="ReactJs";
const MongoDB="MongoDB";
const LOGIC="Logic"

export const Data = [
    {
        Category: MongoDB,
        Concept: "Setup Connection",
        Img: Mongo,
        Code: [
            {
                Logic: "npm install -g nodemon and To run package nodemon ./index.js",
                File: "Db.js",
                Syntax: `const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://adarsh:mko0(IJN@clusterone.5gdhtf1.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOne"


const connectToMongo = () => {

    mongoose.connect(mongoURI);
}
    
module.exports =connectToMongo; `
            },
            {
                Logic: "",
                File: "Index.js",
                Syntax: `const connectToMongo = require('./db');
connectToMongo(); `
            }

        ]
    },
    {
        Category: REACT,
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
    },
    {
      Category: REACT,
      Concept: "Context API",
      Img: react,
      Code: [
          {
              Logic: "",
              File: "NoteContext.js",
              Syntax: `import  { createContext } from 'react';
const NoteContext = createContext();
export default NoteContext; `
          },
          {
              Logic: "Creating Context and passing notes and AddNotes as props",
              File: "NoteState.js",
              Syntax: `import NoteContext from './NoteContext';
import { useState } from 'react';

const NoteState = (props) => {
  const host = 'http://localhost:5000';
  const Intialnotes = [];

  const [notes, setNote] = useState(Intialnotes);
  //ADD NOTE
  const AddNote =async (title, description, tag) => {

     const response = await fetch({host}/api/notes/addnotes, {
      method: 'post',
      headers: {
        "auth-token":localStorage.getItem("token"),
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({title, description, tag})
    });

    const json=await response.json();
    console.log(json.errors);

    if(!json.errors)
    {
    setNote(notes.concat(json.note));
  }
  }
  return (
    <NoteContext.Provider value={{ notes, AddNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState`
          },{
            Logic: "Wrapping note State around children Components",
            File: "App.js",
            Syntax: `const App= ()=> {
 
  return (
    <NoteState>
        <Navbar />
    </NoteState>
  );
}`
        },{
          Logic: "Accessing Context State",
          File: "Noteadd.js",
          Syntax: `import React, { useContext, useState } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
function Noteadd(props) 
{
    const { AddNote } = useContext(NoteContext);

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleOnClick = () => {
        AddNote(note.title, note.description, note.tag);
        props.showAlert("Added Note successfully" ,"success");
    }

    return (
        <div className="container my-3">
         <button  type="button" className="btn btn-info" onClick={handleOnClick}>Add Note</button>
        </div>
    )
}

export default Noteadd`
      }

      ]
  },
  {
    Category: LOGIC,
    Concept: "Looping List",
    Img: react,
    Code: [
        {
            Logic: "Loop through the AlbumID, Get Unique Ids and along with corresponding URLS under it",
            File: "App.js",
            Syntax: `
import './App.css';
import { useState } from 'react';
import Album from './Album';

function App() {

const [albums, setAlbums] = useState([]);
const [uniqueAlbums, setUniqueAlbums] = useState([

]);

const FetchPhotos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  if (data) {
    setAlbums(data);
  }
}
const CreateAlbumCollections = () => {
  const arr = albums.map(p => p.albumId);
  const uniqueAlbumsCount = new Set(arr);
  let albumcolArray = [];
  for (let i = 1; i <= uniqueAlbumsCount.size; i++) {

    let albumcol = {
      id: 0,
      albumId: 0,
      urls: []
    }

    albumcol.albumId = i;

    let res = albums.filter((id) => id.albumId === i).map((item) => {
      let Urls = {
        thumbnailUrl: "",
        Url: ""
      };
      albumcol.id = item.id;
      Urls.thumbnailUrl = item.thumbnailUrl;
      Urls.Url = item.url;
      albumcol.urls.push(Urls);
    })
    albumcolArray.push(albumcol)

  }
  setUniqueAlbums(albumcolArray);
}
const HandleClick = () => {
  FetchPhotos();
}
const HandleClickData = () => {
  CreateAlbumCollections();
}

return (
  <div className="app">
    <div className="button">
      <button onClick={HandleClick} className='btn' >Click to Fetch API</button>
      <button onClick={HandleClickData} className='btn' >Click to ShowData</button>
    </div>
    <div className="albums">
      {uniqueAlbums && uniqueAlbums.map((item) => {
        return (
            <Album item={item} />
        )
      })}
    </div>

  </div>
);
}

export default App; `
        },
        {
            Logic: "",
            File: "Album.js",
            Syntax: `import { useState } from "react";
import List from "./List";
const Album = (props) => {
const [showthumb, setshowthumb] = useState(false);
const handleAlbumCLick = (id) => {
  if (!showthumb) {
    setshowthumb(true);
  } else {
    setshowthumb(false);
  }
};
return (
  <div>
    <div
      style={{ cursor: "pointer" }}
      onClick={handleAlbumCLick}
    >{Album ID {props.item.albumId}}</div>
    {showthumb && <List item={props.item} id={props.item.albumId} />}
  </div>
);
};

export default Album;`
        },{
          Logic: "",
          File: "List.js",
          Syntax: `import React from "react";

const List = (props) => {

return (
  <div>
    <ul>
      {props.item.urls.map((i) => {
        return (
          <li key={i.url}>
            <a href={i.Url}>{i.thumbnailUrl}</a>
          </li>
        );
      })}
    </ul>
  </div>
);
};

export default List;`
      },{
        Logic: "Example JSON",
        File: "https://jsonplaceholder.typicode.com/photos",
        Syntax: `[{
  "albumId": 1,
  "id": 50,
  "title": "et inventore quae ut tempore eius voluptatum",
  "url": "https://via.placeholder.com/600/9e59da",
  "thumbnailUrl": "https://via.placeholder.com/150/9e59da"
},
{
  "albumId": 2,
  "id": 51,
  "title": "non sunt voluptatem placeat consequuntur rem incidunt",
  "url": "https://via.placeholder.com/600/8e973b",
  "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
}]`
    }

    ]
}
]