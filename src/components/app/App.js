import React, {useState, useEffect} from 'react';
import CreateArea from '../create-area/CreateArea';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import NotesArea from '../notes-area/NotesArea';

import './App.css'


function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  )

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  
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
    <div className='app-container'>
      <Header />
      <CreateArea
        addNote={addNote}
      />
      <NotesArea
        notes={notes}
        removeNote={removeNote}
      />
      <Footer />
    </div>
  );
}

export default App;
