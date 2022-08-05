import React from 'react'

import HighlightIcon from '@mui/icons-material/Highlight';

import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <HighlightIcon fontSize="large" sx={{ color: 'white' }} />
      <h1 className='header__title'>ToDoList</h1>
    </header>
  )
}

export default Header