import react from './React.png'
import MongoD from './MongoD.png'
import React from 'react';
const kittenHeader = require('./React.png')
const Mongo = require('./MongoD.png')

const REACT="ReactJs";
const MongoDB="MongoDB";
const EXPRESS="ExpressJs";
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
    }
    ,{
      Category: EXPRESS,
      Concept: "Setting up API's",
      Img: Mongo,
      Code: [
          {
              Logic: "Setting API endpoint and Express Initialization,Please Run these NPM "
+'\nnpm i bcrypt\n'
+'\nnpm i express\n'
+'\nnpm i mongoose\n'
+'npm install -g nodemon'
+'npm i express-validator'
+'npm install cors'
+'npm run start',
              File: "Index.js",
              Syntax: `const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
const port = 5000
app.use(express.json());
app.use(cors())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(Example app listening on port {port})
})`
          },
          {
              Logic: "Model ",
              File: "Note.js",
              Syntax: `
const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('note', NotesSchema);
`
          },
          {
              Logic: "Model",
              File: "User.js",
              Syntax: `const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const User = mongoose.model('user', UserSchema);
  //User.createIndexes();
  module.exports = User;`
          },{
            Logic: "Setting up API CRUD",
            File: "Routes/Notes.js",
            Syntax: `const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');


//ENDPOINT -/api/notes/fetchNotes
router.get('/fetchnotes', fetchuser, async (req, res) => {

    try {
        const userid = req.user.id;
        const note = await Note.find({ user: userid });
        res.json(note);

    } catch (error) {
        res.status(500).json({ error: "Some Error occured!" });
    }

})


//ENDPOINT -/api/notes/addnotes
router.post('/addnotes', fetchuser, [
    body('title', 'title length should be more than and equal to 2').isLength({ min: 2 }),
    body('description', 'description length should be more than and equal to 2').isLength({ min: 2 }),

], async (req, res) => {

   
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    try {

        const { title, description, tag } = req.body;
        const note = new Note({

            title, description, tag, user: req.user.id

        })
        note.save();
        
        res.json({success : true,note:note});


    } catch (error) {
        res.status(500).json({ error: "Some Error occured!" });
    }

})



//ENDPOINT -/api/notes/updatenote
router.put('/updatenote/:id', fetchuser, async (req, res) => {


    const { title, description, tag } = req.body
    const newNote = {};
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }

    try {


        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(401).json({success : false, error: "Note Not Found!" });
        }

        if (note.user.toString() != req.user.id) {
            return res.status(401).json({success : false, error: "Not Allowed" });
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ success : true,note });
    } catch (error) {
        res.status(500).json({ error: "Some Error occured!" });
    }
})

//ENDPOINT -/api/notes/deletenote
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {


        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(401).json({ success : false,error: "Note Not Found!" });
        }

        if (note.user.toString() != req.user.id) {
            return res.status(401).json({ success : false,serror: "Not Allowed" });
        }

        note = await Note.findByIdAndDelete(req.params.id);
        res.json({success : true, note:note });
    } catch (error) {
        res.status(500).json({ error: "Some Error occured!" });
    }
})

module.exports = router `
        },
        {
            Logic: "Setting up API CRUD",
            File: "Routes/Auth.js",
            Syntax: `const express = require('express');
const fetchuser=require('../middleware/fetchuser');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const Secret = "MyNameIsAdarsh";
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// TESTING API -http://localhost:5000/api/auth/
router.get('/', async (req, res) => {
    res.send("API IS UP And running");
})


//For creating new user, no AUth req - email should be unique.
//EP -/api/auth/CreateUser
router.post('/CreateUser', [
    body('password', 'Password length should be more than and equal to 5').isLength({ min: 5 }),
    body('email', 'Email is not in valid format').isEmail(),
    body('name', 'Name should not be empty').notEmpty()
], async (req, res) => {
    //checking the validation we have passed as an arraya above
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    try {
        //checking DB if user Exists
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            res.status(500).json({success : false, message: "Sorry Email already exists!" });
        }
        else {

            //Generating Password+salt
            const salt = bcrypt.genSaltSync(10);
            const secPassword = await bcrypt.hash(req.body.password, salt);
            //Adding user to DB
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
            });
            //gen JWT
            const data = {
                user: { id: user._id }
            }
            const token = jwt.sign(data, Secret);
            //Sending back the JWT to client
            res.status(200).json({success : true, message: "User added successfully!" ,token});
           // res.send(token);
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some Error occured!" });
    }

})


//EP -/api/auth/Login
router.post('/Login', [
    body('password', 'Password length should be more than and equal to 5').exists(),
    body('email', 'Name should not be empty').isEmail()
], async (req, res) => {
    //checking the validation we have passed as an arraya above
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: "Please try again with correct credentials!" });
    }

    try {
        //checking DB if user Exists
        //Destructuring

        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                //gen JWT
                const data = {
                    user: { id: user._id }
                }
                const token = jwt.sign(data, Secret);
                //Sending back the JWT to client
              
                res.status(200).json({success : true, message: "valid User",token,user:user.name });
                
            }
            else {
                res.status(500).json({success : false, message: "Invalid Credentials." });
            }
        }
        else {
    
            res.status(500).json({success : false, message: "User not found" });
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some Error occured!" });
    }

})

//EP -/api/auth/fetchuser
router.post('/fetchuser', fetchuser, async (req, res) => {

    try {
        
        const userid=req.user.id;
        const user=await User.findById(userid).select('-password');  
        res.status(200).json({ success:true,message:"User Fetched successfully!",user:user });
       

    } catch (error) {
        res.status(500).json({ error: "Some Error occured!" });
    }

})







module.exports = router`
        },
        {
            Logic: "Middle Ware used to Auth user using JWT",
            File: "Middleware/FetchUser.js",
            Syntax: `var jwt = require('jsonwebtoken');
const Secret = "MyNameIsAdarsh";

const fetchuser = (req, res, next) => {
    
    const header = req.header('auth-token');
    console.error(header);
    if (!header) {   
        res.status(401).json({ error: "Invalid Token" });

    }
    try {
       
        const data=jwt.verify(header,Secret);    
        req.user=data.user;
        next();
        
    } catch (error) {
        
        res.status(500).json({ error: "Error occured while authorization" });
    }


}
module.exports = fetchuser`
        }
      ]
  }
    ,{
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
},{
  Category: REACT,
  Concept: "Fetch API call in Useffect()",
  Img: react,
  Code: [
      {
          Logic: "Api call in useEffect Hook, on Component Mount",
          File: "App.js",
          Syntax: ` useEffect(() => {
    FetchCoins();
  }, []);
  //APi call
  const FetchCoins = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "7Sx4RHCG1F2bdtLS/bnC1trru4ZHddrAaGaIdTe1YfI=",
      },
    };

    fetch("https://openapiv1.coinstats.app/coins?limit=5", options)
      .then((response) => response.json())
      .then((response) => {
        setCoins(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };`
      }
  ]
},{
  Category: "GITHUB",
  Concept: "PR cant be created, as NO files to compare",
  Img: React,
  Code: [
      {
          Logic: "Merging Master to Main, when PR can not be raised",
          File: "CMD",
          Syntax: `git checkout master
git branch main master -f
git checkout main
git push origin main -f`
      }
  ]
}
]