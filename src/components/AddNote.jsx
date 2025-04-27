import React from 'react'
import { Link } from 'react-router-dom'

const AddNote = () => {
  return (
    <div style={styles.card}>
    <Link to={"/newNote"} >
      <div>
        <span style={styles.plus}>+</span>
      </div>
    </Link>

  </div>
  )
}

const styles = {
    card: {
      width: "80px",
      height: "80px",
      borderRadius: "12px",
      backgroundImage: "url('../public/images/addNote.png')", // change this URL to your image
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      position: "relative",
  
    },
    plus: {
        fontSize: "2rem",
        color: "#fff",
        fontWeight: "bold",
        textShadow: "0 2px 5px rgba(0,0,0,0.5)",
    },

}

export default AddNote