import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HighlightIcon from '@mui/icons-material/Highlight';

const Header = () => {
  return (
    <AppBar
      position='static'
      sx={{
        height: '6rem',
        backgroundColor: '#f5ba13',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
      }}>
      <Container maxWidth='xl'>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <HighlightIcon
            sx={{ color: 'white', fontSize: '2rem', marginRight: '0.5rem' }}
          />
          <Typography
            variant='h1'
            sx={{ fontSize: '3rem' }}>
            ToDoList
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
