import React, { useState, useEffect } from 'react';
import CreateArea from '../create-area/CreateArea';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import NotesArea from '../notes-area/NotesArea';
import { nanoid } from 'nanoid';

const initialState = {
  title: '',
  content: '',
};

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );
  const [note, setNote] = useState(initialState);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleNote = () => {
    const { title, content } = note;
    if (!title) {
      showAlert(true, 'danger', 'please enter value');
    } else if (title && isEditing) {
      setNotes(
        notes.map((item) => {
          if (item.id === editID) {
            return { ...item, title, content };
          }
          return item;
        })
      );
      setNote(initialState);
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: nanoid(), ...note };

      setNotes([...notes, newItem]);

      setIsEditing(false);
      setNote(initialState);
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const clearNotes = () => {
    showAlert(true, 'danger', 'empty list');
    setNotes([]);
  };

  const editNote = (id) => {
    const specificItem = notes.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setNote({ ...note, ...specificItem });
  };

  const removeNote = (id) => {
    showAlert(true, 'danger', 'item removed');
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Header />
      <main className='main'>
        <CreateArea
          note={note}
          handleChange={handleChange}
          isEditing={isEditing}
          handleNote={handleNote}
          alert={alert}
          showAlert={showAlert}
        />
        <NotesArea
          notes={notes}
          removeNote={removeNote}
          editNote={editNote}
          clearNotes={clearNotes}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
