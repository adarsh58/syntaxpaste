import React from "react";


export const Data = [
    {
        Category: REACT,
        Concept: "Express API and Consuming CRUD",
        Img: react,
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
            }
        ]
    },
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