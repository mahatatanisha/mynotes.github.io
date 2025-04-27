
import React from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import NotesList from './NotesList';
import { NoteProvider } from './NoteContext';

const Home = ({notes}) => {
 
  return (
   
      <div style={styles.content} >
        <h1 style={styles.heading}>Welcome! This is safe space !!</h1>
        <NotesList
          notes={notes}
        />
      </div>
    


  )

};
const styles = {

  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "110%",
    justifyContent: "flex-start",
    paddingTop: "2.2rem",
    paddingBottom:'2rem',
    gap: "0.6rem",
    backgroundImage: "url('../public/images/bgNotes1.png')", // change this URL to your image
    backgroundSize: "cover",
    overflow: 'hidden',
  },
  plus: {
    fontSize: "2rem",
    color: "#fff",
    fontWeight: "bold",
    textShadow: "0 2px 5px rgba(0,0,0,0.5)",
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    fontFamily: "'UnifrakturCook', cursive", // Medieval vibe
    color: 'rgb(75, 73, 73)',

  },
};



export default Home