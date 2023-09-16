
import React from 'react';
import Header from './Component/Header';
import CreateArea from './Component/CreateArea';
import Note from './Component/Note';
import { useState } from 'react';


import "./Style.css"

function App(props) {
  const [notes , setNotes]=useState([])


  function addNote(newNote){
    setNotes((prevValue)=>{
      return[...prevValue,newNote]
    })
  }
  function deletesNotes(id){
    setNotes (prevValue=>{
      return [...prevValue.filter((note,index)=>
        index !==id)]
    })
  }
  return (
    <div className="App">
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index)=>(
        <Note 
        key={index}
        id = {index}
        title={note.title}
        content={note.content}
        onDelete={deletesNotes}
        />
      ))}
    </div>
  );
}

export default App;
