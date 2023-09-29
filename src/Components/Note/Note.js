import React from "react";
import "./Note.css";

function Note(props) {
  const deleteNote = () => {
    props.deleteNote(props.note.id);
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color}}>
      <textarea style={{color:props.note.fcolor}}className="note-text">{props.note.text}</textarea>
      <div className="bottom">
        <p>{new Date(props.note.time).toLocaleString()}</p>
        <i
          className="fa-solid fa-trash"
          style={{ color: "white" }}
          onClick={deleteNote}
        ></i>
      </div>
    </div>
  );
}

export default Note;
