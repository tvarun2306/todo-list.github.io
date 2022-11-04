
import './App.css';
import React ,{useState} from 'react';

function App() {
  const [note, setNote] = useState();
  const [noteList, setNoteList] = useState([]);
  const [check, setCheck] = useState(false);

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

  // function handleNote(e) {
  //   setNote(e.target.value);
  // }

  function handleCheck() {
    setCheck(true);
    if (check === true) {
      return <button>del</button>;
    }
  }

  return (
    <div className="App">
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
                onChange={handleCheck}
              ></input>
              <button id="delete" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
