import React, {useState} from 'react';
import CreateArea from './components/create-area/CreateArea';
import Header from './components/header/Header';
import NotesArea from './components/notes-area/NotesArea';


function App() {
  const [notes, setNotes] = useState([])
  
  const addNote = (newNote) => {
    const emptyNote = !newNote.title && !newNote.content

    if (!emptyNote) {
      setNotes(prevNotes => [...prevNotes, newNote])
    }
  }

  const removeNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
  }

  
  return (
    <>
      <Header />
      <CreateArea
        addNote={addNote}
      />
      <NotesArea
        notes={notes}
        removeNote={removeNote}
      />
    </>
  );
}

export default App;
