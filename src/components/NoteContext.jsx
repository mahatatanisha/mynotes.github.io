import { createContext, useContext } from 'react';

const NoteContext = createContext();
export const useNote = () => useContext(NoteContext);

export const NoteProvider = ({ children, handleAddNote }) => {
  return (
    <NoteContext.Provider value={{ handleAddNote }}>
      {children}
    </NoteContext.Provider>
  );
};
