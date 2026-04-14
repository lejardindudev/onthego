//## HOOKS ##########
// import { useState } from 'react';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//## UTILS  ###########
import NoteApi from "./api/noteApi";
import { setNoteList } from "./store/notes/notesSlice";

// ## ASSETS - RESSOURCES #############
import "./App.css";

//## COMPONENTS  ###########
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  const fetchAllNotes = async () => {
    const notes = await NoteApi.fetchAll();
    //TODO: implement this
    //  const getNextIndex = await NoteApi.fetchNextIndex();
    // stockage des notes dans le store
    dispatch(setNoteList(notes));
    // dispatch(setNextNoteId(nextNoteId));
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <>
      <header className="Header">
        <Logo />
        <Search />
      </header>
      <Outlet />
      {/* <Dashboard notes={notes} /> */}
      {/* <SingleNotePage note={singleNote} /> */}
      {/* <EditNotePage note={singleNote} /> */}
    </>
  );
}

export default App;
