import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import NoteView from './NoteView';
const Note = ({ id, text, date, handleDeleteNote }) => {
    const navigate = useNavigate();
    const goToNoteView = () => {
        navigate('/NoteView', { state: { text: text } });
      };
    return (
        
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' , cursor:'pointer',height:'fit-content',width:'fit-content'}} onClick={goToNoteView} >
                <div style={styles.mainAddNote}>
                    <div style={styles.noteContent} >
                        <span style={styles.noteText}>
                            {text.length > 30 ? `${text.slice(0, 30)}...` : text}
                        </span>
                    </div>


                </div>
                <div>
                    <small style={styles.date} > {date}</small>
                </div>
            </div>
        




    )
};

const styles = {
    mainAddNote: {
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        width: "80px", // fixed size for small square cards
        height: "80px",
        borderRadius: "12px",
        backgroundImage: "url('../public/images/addNote.png')", // change this URL to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        wordWrap: 'break-word',
        overflow: 'hidden',
        lineHeight: '0.9rem',


    },

    noteText: {
        fontSize: '0.7rem',
        color: 'rgb(57, 56, 56)',
        boxSizing: 'border-box',
        fontWeight: 'bold',

    },

    date: {
        alignItems: 'center',
        fontSize: '0.5rem', // slightly smaller
        color: 'rgb(57, 56, 56)',
        fontWeight: 'bold',
    },
    noteContent: {
        padding: '0.5rem',
        width: "75px", // fixed size for small square cards
        height: "75px",
        wordWrap: 'break-word',
        overflow: 'hidden',

    }


}

export default Note;