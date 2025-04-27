

import Home from './components/Home'
import NewNote from './components/NewNote'
import NoteView from './components/NoteView'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NoteProvider } from './components/NoteContext';
import { useState,useEffect } from 'react';
import { nanoid } from 'nanoid';

function App() {
   const [notes, setNotes] = useState([
      {
        id: nanoid(),
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "02/14/2025"
      },
      {
        id: nanoid(),
        text: "Today, I will write a lot.",
        date: "02/10/2025"
      },
    
    
    ]);

  const handleAddNote = (note) => {
    console.log('Note saved:', note);
    const date = new Date();
        const newNote = {
          id: nanoid,
          text: note,
          date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
  };
   useEffect(() => {
      const savedNotes = JSON.parse(
        localStorage.getItem('react-notes-app-data')
      );
  
      if (savedNotes) {
        setNotes(savedNotes);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes)
      );
    }, [notes]);

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home notes={notes} />
      },
      {
        path: "/newNote",
        element: <NewNote />
      },
      {
        path: '/NoteView',
        element: <NoteView />
      },

    ])

    return (
      <>
      <NoteProvider handleAddNote={handleAddNote}>
      <div className='bg-container'>
          <RouterProvider router={router} />
        </div>
      </NoteProvider>
       

      </>
    )
  }

export default App
