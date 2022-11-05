
import './App.css';
import React ,{useState} from 'react';
import Progress from './Progress';

function App() {
  const [note, setNote] = useState();
  const [noteList, setNoteList] = useState([]);
  const [inpro, setInpro] = useState();
  

  function handleNoteList() {
    const noteListtemp = [...noteList];
    noteListtemp.push(note);
    setNoteList(noteListtemp);
  }

  function handleDelete(index) {
    const noteListTemp = [...noteList];
    noteListTemp.splice(index, 1);
    setNoteList(noteListTemp);
  }

  return (
    <div className="App">
    
      <div className="todo">
      <h1 className="heading">To Do List-</h1>
      <input
        className="input"
        type="text"
        value={note}

        onChange={(e) => {
          setNote(e.target.value);
        }}
      ></input>

      <button onClick={handleNoteList}>Add Note</button>
      <div className="noteList">
        {noteList.map((item, index) => (
          <div className="listElement">
            <div>
              {" "}
              {index + 1 + ". "}
              {item}
            </div>
            <div>
              <input
                className="checkBox"
                type="checkbox"
                onChange={()=>{
                    
                    setInpro(item);
                
                }}
              ></input>
              <button id="delete" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Progress props={inpro}/>
      <div className="done"></div>
     
    </div>
  );
}

export default App;
