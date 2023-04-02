import React, { useRef, useState, useEffect } from 'react';
import { Container, Box, Fab, Zoom, Paper } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import './CreateArea.css';
import Alert from '../Alert';

const CreateArea = ({
  note,
  handleChange,
  isEditing,
  handleNote,
  alert,
  showAlert,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef();

  const expand = () => {
    setIsExpanded(true);
  };

  useEffect(() => {
    if (isExpanded) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  return (
    <Container maxWidth='sm'>
      <Paper elevation={4}>
        <Box className='create-area'>
          {alert.show && (
            <Alert
              {...alert}
              removeAlert={showAlert}
            />
          )}
          {isExpanded || isEditing ? (
            <input
              type='text'
              name='title'
              value={note.title}
              placeholder='Title'
              onChange={handleChange}
              ref={inputRef}
            />
          ) : null}

          <textarea
            name='content'
            value={note.content}
            rows={isExpanded || isEditing ? 3 : 1}
            placeholder='Take a note...'
            onChange={handleChange}
            onClick={expand}
          />

          <Zoom in={isExpanded || isEditing}>
            <Fab
              onClick={handleNote}
              aria-label='add'>
              {isEditing ? (
                <EditIcon sx={{ fontSize: 30 }} />
              ) : (
                <AddIcon sx={{ fontSize: 30 }} />
              )}
            </Fab>
          </Zoom>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateArea;
