import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

function NoteContainer(props) {
  return (
    <div className="note-container">
      <div className="note-container-notes">
        {props.notes.map((item) => (
          <Note
            color={item.color}
            fcolor={item.fcolor}
            key={item.id}
            note={item}
            deleteNote={props.deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteContainer;
