import React from 'react';
import {
  Grid,
  Container,
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const NotesArea = ({ notes, removeNote, editNote, clearNotes }) => {
  return (
    <Container maxWidth='xl'>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: '4rem' }}>
        {notes.map((note) => (
          <Grid
            item
            key={note.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                wordBreak: 'break-all',
                height: '100%',
              }}>
              <CardContent>
                {note.title && (
                  <Typography variant='h4'>{note.title}</Typography>
                )}
                <Typography paragraph={true}>{note.content}</Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant='body1'>
                  <DeleteIcon
                    sx={{ fontSize: 25, cursor: 'pointer', color: '#f5ba13' }}
                    onClick={() => removeNote(note.id)}
                  />
                </Typography>
                <Typography variant='body1'>
                  <EditIcon
                    sx={{ fontSize: 25, cursor: 'pointer', color: '#f5ba13' }}
                    onClick={() => editNote(note.id)}
                  />
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        display='flex'
        justifyContent='center'
        mt='10rem'
        sx={{
          heigth: '100%',
        }}>
        <Button
          variant='contained'
          onClick={clearNotes}>
          Clear All
        </Button>
      </Box>
    </Container>
  );
};

export default NotesArea;
