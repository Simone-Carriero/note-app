import React, { useState } from 'react'
import { Fab } from '@mui/material'
import { Zoom } from '@mui/material';
import { nanoid } from 'nanoid'

import AddIcon from '@mui/icons-material/Add';

import './CreateArea.css'

const CreateArea = ({addNote}) => {

  const initialState = {
    title: '',
    content: ''
  }

  const [note, setNote] = useState(initialState)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleChange = ({ target }) => {
    const { name, value } = target

    setNote(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const submitNote = (e) => {
    e.preventDefault();

    addNote({
      id: nanoid(),
      ...note
    })

    setNote(initialState)
  }

  const expand = () => {
    setIsExpanded(true)
  }


  return (
    <div className="create-area">
      <form
        className='create-area__form'>
        
        {
          isExpanded && 

          <input
            type='text'
            name='title'
            value={note.title}
            placeholder='Title'
            onChange={handleChange}
          />
        }

        <textarea
          name='content'
          value={note.content}
          rows={isExpanded ? 3 : 1}
          placeholder='Take a note...'
          onChange={handleChange}
          onClick={expand}
        />
        
        <Zoom in={isExpanded} >
          <Fab
          onClick={submitNote}
          size='small'
          aria-label="add"
        >
          <AddIcon sx={{ fontSize: 30 }} />
          </Fab>
        </Zoom>

      </form>
    </div>
  )
}

export default CreateArea