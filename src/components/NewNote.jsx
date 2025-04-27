import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react';
import { useNote } from './NoteContext';

const NewNote = () => {
  const [noteText, setNoteText] = useState('');
  const { handleAddNote } = useNote();
  const characterLimit = 1000;
  const handleChange = (event) => {
    if(characterLimit - event.target.value.length >=0){
    setNoteText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('');
    }
  };

  return (
    <div style={styles.mainAddNote}>
      <div style={styles.header}>
        <Link to={"/"}><div >⬅️ </div></Link>
        <h1 style={styles.heading}>Dear Journal...</h1>

      </div>

      <textarea style={styles.textArea}
        rows="8"
        cols="10"
        placeholder="Type to add a note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <button className="save" style={styles.save} onClick={handleSaveClick}>Save</button>
    </div>
  )

}
const styles = {
  mainAddNote: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "55%",
    height: "100%",
    borderRadius: "12px",
    backgroundImage: "url('../public/images/addNote.png')", // change this URL to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "1rem",

  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap:'5rem',
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: "'UnifrakturCook', cursive", // Medieval vibe
    color: 'rgb(57, 56, 56)',

  },

  textArea: {
    width: '90%',
    height: '75%',
    backgroundColor: 'transparent',
    border: 'none',
    resize: 'none', // optional: prevents manual resizing
    outline: 'none', // optional: removes blue outline on focus
    color: 'rgb(92, 61, 61)',
  },

  save: {
    backgroundColor: 'rgb(40, 177, 246)',
    border: 'none',
    borderRadius: '15px',
    padding: '3px 7px 3px 7px',
    fontSize:'0.8rem',
    
  }
};

export default NewNote