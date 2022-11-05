
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
    
      <div class="todo">
      <h1 class="heading">To Do List-</h1>
      <input
        class="input"
        type="text"
        value={note}

        onChange={(e) => {
          setNote(e.target.value);
        }}
      ></input>

      <button onClick={handleNoteList}>Add Note</button>
      <div class="noteList">
        {noteList.map((item, index) => (
          <div class="listElement">
            <div>
              {" "}
              {index + 1 + ". "}
              {item}
            </div>
            <div>
              <input
                class="checkBox"
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
      <div class="in-progress">Progress<Progress props={inpro}/></div>
      <div class="done"></div>
     
    </div>
  );
}

export default App;
