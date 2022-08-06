import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';

import './Note.css'

const Note = ({ note, onRemoveNote }) => {
  const {title, content, id} = note


  const remove = () => {
    onRemoveNote(id)
  }

  return (
    <div className='note'>
      <h2 className='note__title'>{title}</h2>
      <p className='note__content'>{content}</p>
      <DeleteIcon
        sx={{fontSize: 20}}
        className='note__icon'
        onClick={remove}
      />
    </div>
  )
}

export default Note