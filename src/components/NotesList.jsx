
import React from 'react';
import Note from './Note';
import { Link } from 'react-router-dom'
import AddNote from './AddNote';
const NotesList = ({notes, }) => {
  return(
    <div className='notes-list'
    style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.2rem',
        justifyContent: 'flex-start',
        paddingLeft:'4rem',
        
        overflowY: 'scroll', 
        paddingBottom:'5rem',
        width:'85%',
        height:'90%'
        }}>
      {notes.map((note)=> (
      <Note 
      key={note.id}
      id={note.id} 
      text={note.text} 
      date={note.date}
      />
      ))}
      <AddNote/>

      </div>
  );
};

export default NotesList;
