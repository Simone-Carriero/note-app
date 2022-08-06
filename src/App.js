import React, {useState} from 'react';
import CreateArea from './components/create-area/CreateArea';
import Header from './components/header/Header';


function App() {
  const [notes, setNotes] = useState([])
  
  const addNote = (newNote) => {
    setNotes(prevNotes => [...prevNotes, newNote])
  }

  return (
    <>
      <Header />
      <CreateArea
        addNote={addNote}
      />
    </>
  );
}

export default App;
