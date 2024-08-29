import reactImg from '../assets/reactnew.png'
import Mongo from '../assets/MongoD.png'
import Express from '../assets/express.png'
import Js from '../assets/Js.png'
import Html from '../assets/htmlcss.png'
import Git from '../assets/Git.png'



const REACT = "ReactJs";
const MongoDB = "MongoDB";
const EXPRESS = "ExpressJs";
const LOGIC = "Logic"

export const Data = [
  {
    Category: MongoDB,
    Concept: "Setup Connection MongoDB",
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
  , {
    Category: EXPRESS,
    Concept: "Setting up Express API's",
    Img: Express,
    Code: [
      {
        Logic: "Setting API endpoint and Express Initialization,Please Run these NPM "
          + '\nnpm i bcrypt\n'
          + '\nnpm i express\n'
          + '\nnpm i mongoose\n'
          + 'npm install -g nodemon'
          + 'npm i express-validator'
          + 'npm install cors'
          + 'npm run start',
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
      }, {
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
  , {
    Category: REACT,
    Concept: "Routes",
    Img:reactImg,
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
    Concept: "UseContext Hook",
    Img:reactImg,
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
      }, {
        Logic: "Wrapping note State around children Components",
        File: "App.js",
        Syntax: `const App= ()=> {
 
  return (
    <NoteState>
        <Navbar />
    </NoteState>
  );
}`
      }, {
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
    Img:Js,
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
      }, {
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
      }, {
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
  }, {
    Category: REACT,
    Concept: "Fetch API call in UseEffect() Hook",
    Img:reactImg,
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
  }, {
    Category: "Github",
    Concept: "PR cant be created, as no files to compare",
    Img:Git,
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
  },
  {
    Category: "Java Script",
    Concept: "ES6/JS Concepts",
    Img:Js,
    Code: [
      {
        Logic: "",
        File: "main.js",
        Syntax: `function getName(name) {
  return name;
}

let a = false;
let b = false;

console.log(a || getName("Sangam Mukherjee"));

//Template literals

let name1 = "John";
let name2 = "Doe";

console.log(name1 + " " + name2,{name1} {name2});

//Ternary operator

const showRecipeOne = false;

function getRecipeOneName(recipeName) {
  return recipeName;
}

function getRecipeTwoName(recipeName) {
  return recipeName;
}

if (showRecipeOne) {
  console.log(getRecipeOneName("Pizza"));
} else {
  console.log(getRecipeTwoName("Coke"));
}

showRecipeOne
  ? console.log(getRecipeOneName("Pizza"))
  : console.log(getRecipeTwoName("Coke"));

const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
  id,
  productName,
  rating,
};

console.log(product);

const product2 = {
  description: "Product 2 description",
  id,
  productName,
  rating,
};

// const getProductTwoDescription = product2.description;

// console.log(getProductTwoDescription);

const { description } = product2;

console.log(description);

const array = [1, 2, 3, 4];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];

console.log(getArrayFirstValue, getArraySecondValue);

const [
  arrayFirstElement,
  arraySecondElement,
  arrayThirdElement,
  arrayFourthElement,
] = array;

console.log(
  arrayFirstElement,
  arraySecondElement,
  arrayThirdElement,
  arrayFourthElement
);

//default parameters, spread and rest operators

function mulOfTwoNumbers(num1 = 1, num2 = 2) {
  console.log(num1, num2);
  return num1 * num2;
}

console.log(mulOfTwoNumbers(10));

const array2 = [2, 3, 4];
const array3 = [10, 11, 12];

console.log([999, ...array2, 90, ...array3, 10000]);

function getInfo(a, ...c) {
  console.log(a, c);

  //

  return "Sangam Mukherjee";
}

console.log(getInfo(1, 2, 3, 4, 5, 5, 6, 6, 7, 4, 2, 2, 2));

//map, filter, find, some, every, includes, indexOf, findIndex

const personsArray = [
  {
    name: "Person 01",
    age: 45,
    country: "USA",
  },
  {
    name: "Person 1",
    age: 30,
    country: "USA",
  },
  {
    name: "Person 2",
    age: 40,
    country: "RUSSIA",
  },
  {
    name: "Person 3",
    age: 50,
    country: "INDIA",
  },
];

let getAllNames = personsArray.map((singlePerson, index) => {
  console.log(singlePerson, index);
  return {singlePerson.name} age is {singlePerson.age};
});

console.log(getAllNames);

let getPersonFromUSA = personsArray.find((singlePerson, index) => {
  return singlePerson.country === "USA";
});

console.log(getPersonFromUSA);

let getAllPersonsFromUSA = personsArray.filter((singlePerson, index) => {
  return singlePerson.country === "USA";
});

console.log(getAllPersonsFromUSA);

let checkSomeArrayMethodWithExample = personsArray.some((singlePerson) => {
  return singlePerson.age > 40;
});

console.log(checkSomeArrayMethodWithExample);

let checkEveryArrayMethodWithExample = personsArray.every((singlePerson) => {
  return singlePerson.age > 25;
});

console.log(checkEveryArrayMethodWithExample);

const fruitsArray = ["apple", "banana", "orange"];

console.log(fruitsArray.includes("sangam"), fruitsArray.indexOf("sangam"));

let getIndexOfPersonWhoISFromRussia = personsArray.findIndex((singlePerson) => {
  return singlePerson.country === "JAPAN";
});

console.log(getIndexOfPersonWhoISFromRussia);

let getListOfproductsElement = document.querySelector(".list-of-products");

function renderProducts(getProducts) {
  getListOfproductsElement.innerHTML = getProducts
    .map((singleProductItem) => <p>{singleProductItem.title}</p>)
    .join(" ");
}

async function fetchListOfProducts() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    const result = await apiResponse.json();

    console.log(result);

    if (result?.products?.length > 0) renderProducts(result?.products);
  } catch (e) {
    console.log(e);
  }
}

fetchListOfProducts();`
      }
    ]
  }, {
    Category: REACT,
    Concept: "CSS Responsive",
    Img:Html,
    Code: [
      {
        Logic: "",
        File: "App.css",
        Syntax: `

/* Desktop container utility class: */
.container {
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
}

/* 2xl */
@media (max-width: 1536px) {
  .container {
    max-width: 1280px;
  }
}

/* xl */
@media (max-width: 1280px) {
  .container {
    max-width: 1024px;
  }
}

/* lg */
@media (max-width: 1024px) {
  .container {
    max-width: 768px;
  }
}

/* md */
@media (max-width: 768px) {
  .container {
    max-width: 640px;
  }
}

/* sm */
@media (max-width: 640px) {
  .container {
    max-width: 475px;
  }
}

/* xs */
@media (max-width: 475px) {
  .container {
    width: 100%;
  }

  @media (max-width: 300px) {
    .container {
      width: 100%;
    }

    @media (max-width: 100px) {
      .container {
        width: 100%;
      }
  }}}

  


/* Mobile container utility class:*/
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

/* xs */
 @media (min-width: 475px) {
  .container {
    max-width: 475px;
  }
} 

/* sm */
 @media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
} 

/* md */
 @media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
} 

/* lg */
 @media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
} 

/* xl */
 @media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
} 

/* 2xl */
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}  `
      }
    ]
  }, {
    Category: REACT,
    Concept: "Window Dimension Monitoring",
    Img:reactImg,
    Code: [
      {
        Logic: "",
        File: "Dimension.jsx",
        Syntax: `import React, { useState, createRef } from 'react'

const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 })
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const boundingRect = current.getBoundingClientRect()
      const { width, height } = boundingRect
      setDimensions({ width: Math.round(width), height: Math.round(height) })
    }
  }, [ref])
  return dimensions
}

export default function Dimension() {
  const divRef = createRef()
  const dimensions = useRefDimensions(divRef)

  return (
    <div >
      <div
        ref={divRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
    {dimensions.width}w {dimensions.height}h
      </div>
    </div>
  )
}`
      }
    ]
  },
  {
    Category: REACT,
    Concept: "Showing Alert",
    Img:reactImg,
    Code: [
      {
        Logic: "Creating Alert Component",
        File: "Alert.jsx",
        Syntax: `import React from 'react'
function Alert(props) {
  return (
    <div>
      <div className={"alert alert-"$"{props.alert.type}"} role="alert">
       {props.alert.message}
     </div>
    </div>
  )
}

export default Alert`
      }, {
        Logic: "Calling at entry point",
        File: "App.js",
        Syntax: `import './App.css';
import Navbar from './Components/Navbar'
import Alert from './Components/Alert';
import { useState } from 'react';


const App= ()=> {
  const [alert,setAlert]=useState(null);
  console.log(alert)
  const showAlert=(m,t)=>{
    setAlert({message:m,type:t});
    console.log(alert)
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }



  return (
        <Navbar showAlert={showAlert} />
        {alert && <Alert alert={alert}/> }
  );
}

export default App;`
      }, {
        Logic: "Calling Show ALlert",
        File: "NavBar.jsx",
        Syntax: `import React from 'react'
import { Link  } from 'react-router-dom'


function Navbar(props) 
{
let navigate=useNavigate();
const handleLogout = () => {
props.showAlert(localStorage.getItem("user")+" Logged out" ,"success");
}

return (
<div>
<div className="d-flex">
      <Link type="button" className="btn btn-outline-primary align" to="/login">Log in</Link>
      <Link type="button" className="btn btn-outline-success mx-3" to="/signup" >Sign up</Link>
 <button className="btn btn-outline-danger mx-4" onClick={handleLogout}>Log Out</button></div>
</div>
)
}

export default Navbar`
      }
    ]
  }, {
    Category: REACT,
    Concept: "UseNavigate,UseRef,Local Storage",
    Img:reactImg,
    Code: [
      {
        Logic: "Use to Navgate to some home page",
        File: "Notes.jsx",
        Syntax: `import {useNavigate } from 'react-router-dom;'
        let navigate=useNavigate();
        navigate("/home");`
      },
      {
        Logic: "Set And Remove from localStorage",
        File: "Notes.jsx",
        Syntax: `localStorage.setItem("user", json.user);'
          localStorage.removeItem("user");`
      },
      {
        Logic: "UseRef",
        File: "Notes.jsx",
        Syntax: `import React, { useContext, useEffect, useState,useRef } from 'react'
import Noteitem from './Noteitem';
import Noteadd from './Noteadd';
function Notes(props) {
    const [note, setNote] = useState({ title: "", description: "", tag: "" ,id:""});
    const ref=useRef(null);
    const update =(note) =>
    {
        ref.current.click();
    }

    return (
        <div className='row md-4'>
            <div className="container">
                <Noteadd showAlert={props.showAlert}  />
            </div>
            <div className="container">
                <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>
            </div>
            <Noteitem key={note._id} note={note} update={update} showAlert={props.showAlert} ></Noteitem>
        </div>
    )
}

export default Notes`
      }
    ]
  },{
    Category: REACT,
    Concept: "Real Time Setting State from Input fields",
    Img:reactImg,
    Code: [
        {
            Logic: "Real Time Setting State from Input fields",
            File: "Note.jsx",
            Syntax: `
import React, { useContext, useState } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
function Noteadd(props) {
const { AddNote } = useContext(NoteContext);
const [note, setNote] = useState({ title: "", description: "", tag: "" });
const handleOnClick = () => {
    AddNote(note.title, note.description, note.tag);
    props.showAlert("Added Note successfully" ,"success");
}
const handleOnClickReset = (e) => {
    setNote({ title: "", description: "", tag: "" });
}

const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
   
    console.log( localStorage.getItem("token"));
}

return (
    <div className="container my-3">
        <h2>Add Notes</h2>
        <form className="my-3">
            <div className="row mb-3">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" name="title" onChange={onChange} value={note.title} id="inputTitle" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" name="description" onChange={onChange} value={note.description} id="inputDesc" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="tag" className="col-sm-2 col-form-label">Tag</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" onChange={onChange} name="tag" value={note.tag} id="inputTag" />
                </div>
            </div>
            <button disabled={note.description.length<5 ||note.title.length<5} type="button" className="btn btn-info" onClick={handleOnClick}>Add Note</button>
            <button disabled={note.description.length<5 ||note.title.length<5} type="button" className="btn btn-info mx-3" onClick={handleOnClickReset}>Reset</button>
        </form>
    </div>
)
}

export default Noteadd
`
        }
    ]
},
{
  Category: REACT,
  Concept: "Express API and Consuming CRUD",
  Img:reactImg,
  Code: [
      {
          Logic: "Creating CRUD operation",
          File: "Backend/notes.js",
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

  note = await Note.findByIdAndUpdate(req.params.id, { "$"set: newNote }, { new: true });
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
      }
 ,
{
  Logic: "ADD",
  File: "NoteContext.js",
  Syntax: ` //ADD NOTE
const AddNote =async (title, description, tag) => {

const response = await fetch("$"{host}/api/notes/addnotes, {
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
}`
}, {
  Logic: "UPDATE",
  File: "NoteContext.js",
  Syntax: `//Update NOTE
const UpdateNote =async (title, description, tag,id) => {

const response = await fetch("$"{host}/api/notes/updatenote/"$"{id}, {
method: 'put',
headers: {
 "auth-token": localStorage.getItem("token"),
 "Content-Type" : "application/json"
},
body:JSON.stringify({title, description, tag})
});

const json=await response.json();


if(!json.errors)
{
const updatedNote=JSON.parse(JSON.stringify(notes))
for (let index = 0; index < updatedNote.length; index++) {

if(updatedNote[index]._id===id){
  updatedNote[index].title=title;
  updatedNote[index].description=description;
  updatedNote[index].tag=tag;

}
}
//Cleint update
setNote(updatedNote);
}
}`
}, {
  Logic: "DELETE",
  File: "NoteContext.js",
  Syntax: ` //DELETE NOTE
const DeleteNote =async (id) => {
//API call
const response = await fetch("$"{host}/api/notes/deletenote/"$"{id, {
method: 'delete',
headers: {
  "auth-token": localStorage.getItem("token"),
}
});
//Client Update
const newNote = notes.filter((e) => { return e._id !== id });
setNote((newNote));
}
`
}
, {
  Logic: "Calling API via Context",
  File: "Note.jsx",
  Syntax: ` import React, { useContext, useState } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
function Noteadd(props) {
const { AddNote } = useContext(NoteContext);
const [note, setNote] = useState({ title: "", description: "", tag: "" });
const handleOnClick = () => {
  AddNote(note.title, note.description, note.tag);
 
}

const {DeleteNote} = useContext(NoteContext);
const {note,update,showAlert} = props;
const handleDelete=(id)=>
{
  DeleteNote(id);
 
}
return (
  <></>      
)
}

export default Noteadd
`
}
  ]
},
 {
        Category: REACT,
        Concept: "Custom fetchAPI hook",
        Img:reactImg,
        Code: [
            {
                Logic: "Creating fetch api hook",
                File: "use-fetch.js",
                Syntax: `import { useEffect } from "react";
import { useState } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      if (result) {
        setData(result);
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch; `
            },{
            
                Logic: "Consuming custom fetch api hook",
                File: "app.js",
                Syntax: `const { data, loading, error } = useFetch("https://dummyjson.com/recipes"); `
    }
        ]
    
},
{
       Category: REACT,
       Concept: "Real Time Search Functionlity",
       Img:reactImg,
       Code: [
           {
               Logic: "Creating Search function and passing the Function as props to Navbar",
               File: "App.js",
               Syntax: ` const [syntaxData, setSyntaxData] = useState(Data);
  const onchangeSearch = (searchVal) => {
    if (searchVal === "" || searchVal === undefined) { setSyntaxData(Data); return; }
    const filterBySearch = Data.filter((item) => {
      if (item.Concept.toLowerCase()
        .includes(searchVal.toLowerCase())) { return item; }
    })
    setSyntaxData(filterBySearch);
  } `
           },{
           
               Logic: "Calling Search function as props from Navbar",
               File: "Navbar.js",
               Syntax: ` <div className="d-flex" role="search">
        <input className="form-control me-2" onChange={e => props.onchangeSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
     
      </div> `
   }
   ,{
           
    Logic: "Sending Function as props to NavBar and Filtered Data to Item Container",
    File: "App.js",
    Syntax: `  <NavBar onchangeSearch={onchangeSearch} />
    <Route exact path="/" element={<><SyntaxContainer Data={syntaxData} /></>} />`
}
       ]
   
}
]