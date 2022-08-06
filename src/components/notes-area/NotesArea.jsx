import React from 'react'
import Note from '../note/Note';

import './NotesArea.css'

const NotesArea = ({ notes, removeNote }) => {
  const mappedNotes = notes.map(note => (
      <Note
        key={note.id}
        note={note}
        onRemoveNote={removeNote}
      />
    )
  )

  return (
    <div className='notes-area'>{mappedNotes}</div>
  )
}

export default NotesArea