import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = [
    { bcolor: "#001233",fcolor:"#871c84"},
    { bcolor: "#ff0a54",fcolor:"033270"},
    { bcolor: "#871c84",fcolor:"#001233"},
    { bcolor: "#033270",fcolor:"#ff0a54" },
  ];

  const [text, setText] = useState("");
  const [buttonOpen, setButtonOpen] = useState(false);
  const [color, setColor] = useState("");
  const [fcolor, setFcolor] = useState("");
  const handleOnChange = (event) => {
    const newText = event.target.value;

    if (newText.length > 0) {
      setText(newText);
    } else {
      setText("");
    }
  };
  const handleUpClick = () => {
    let changeUpperCase = text.toUpperCase();
    setText(changeUpperCase);
  };

  const handleLoClick = () => {
    let changeLowerCase = text.toLowerCase();
    setText(changeLowerCase);
  };

  
const handleClearClick = () =>{
   let clearText='';
   setText(clearText);
}

const handleRemoveExtraClick =()=>{
    
   let newText=text.split(/[ ]+/);
    setText(newText.join(' '));
}
 
  return (
    <div className="sidebar">
      <div className="content-list">
        <h2>Add your note</h2>
      </div>

      <textarea
        placeholder="Enter Something to preview"
        className="input-textrarea"
        value={text}
        onChange={handleOnChange}
        style={{
          backgroundColor: "white",
          height: "350px",
          width: "350px",
          border: "none",
          borderRadius: "25%",
          padding: "30px",
          outline: "none",
          resize: "none",
          fontSize:"22px",
          marginLeft:"10px",

        }}
      ></textarea>
      <div className="function-text">
      <button onClick={handleUpClick}>Upper Case</button>
      <button onClick={handleLoClick}>Lower Case</button>  
      <button onClick={handleRemoveExtraClick}>Remove Extra Space</button>
      <button onClick={handleClearClick}>Clear</button>
      </div>
      <div className="content-colors">
        <ul className="sidebar-color-list-ul">
          {colors.map((item, index) => (
            <li
              key={item.bcolor}
              style={{ backgroundColor: item.bcolor}}
              className="sidebar-color-list"
              onClick={() => {
                setButtonOpen(!buttonOpen);
                setColor(item.bcolor);
                setFcolor(item.fcolor);
                
              }}
            ></li>
          ))}
        </ul>
        <div className={`btn-di ${buttonOpen ? "btn-di-active" : ""} `}>
          <button
            className="add-note-btn"
            onClick={() => {
              if(text.length>0){
                
                props.addNote(text, color,fcolor)
                setText('');
              }
              else{
                alert('Write Something')
              }
             
            }}
          >
            +
          </button>
        </div>
        
      </div>
      
    
    </div>
  );
}

export default Sidebar;
