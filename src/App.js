import "./App.css";
import React, { useState } from "react";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text, color,fcolor) => {
    const tempNotes = [
      {
        id: notes.length + 1,
        text,
        time: Date.now(),
        color,
        fcolor,
        
      },
      ...notes,
    ];  
    setNotes(tempNotes);
  };

  console.log(notes);

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  return (
    <div className="App">
      <h1
        className="heading"
        style={{ width: "100%", color: "white", backgroundColor: "#001233" }}
      >
        Notes
      </h1>
      <main>
        <Sidebar addNote={addNote} />
        <NoteContainer notes={notes} deleteNote={deleteNote} />
      </main>
    </div>
  );
}

export default App;
