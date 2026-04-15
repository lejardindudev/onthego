//## HOOKS ##########
// import { useState } from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//## UTILS  ###########
import NoteApi from "./api/noteApi";
import { setNoteList } from "./store/notes/notesSlice";

// ## ASSETS - RESSOURCES #############
import "./App.css";

//## COMPONENTS  ###########
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  // Initialisation des hooks
  const dispatch = useDispatch();
  const location = useLocation();

  // Condition sur route
  const isVisible = location.pathname === "/";
  // Ecriture dans le store et requêtage API
  const fetchAllNotes = async () => {
    const notes = await NoteApi.fetchAll();
    // stockage des notes dans le store
    dispatch(setNoteList(notes));
  };

  // Limitation à une seule requete api au chargement
  useEffect(() => {
    fetchAllNotes();
  }, []);

  // Lecture du store
  const notes = useSelector((store) => store.NOTE.noteList);

  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  // States filtrage
  const [filteredNotes, setFilteredNotes] = useState([...notes]);

  // Normalize fonction
  const normalize = (value) => {
    return (
      value
        .trim()
        .toLowerCase()
        // Gestion des accents (NFD sépare l'accent de la lettre)
        .normalize("NFD")
        // Gestion des accents (supprime le caractère accent)
        .replace(/[\u0300-\u036f]/g, "")
    );
  };
  // let filteredNotes = [...notes];
  const searchHandler = (e) => {
    const query = normalize(e.target.value);
    console.log(query);
    // Champs de recherche vide
    if (!query) {
      setFilteredNotes(notes);
      return;
    }

    const filtered = notes.filter((note) => {
      const title = normalize(note.title);
      const description = normalize(note.description);
      return title.includes(query) || description.includes(query);
    });
    setFilteredNotes(filtered);
  };

  return (
    <>
      <header className="Header">
        <Logo />
        {isVisible && <Search onChange={searchHandler} />}
      </header>
      <Outlet context={{ filteredNotes }} />
    </>
  );
}

export default App;
