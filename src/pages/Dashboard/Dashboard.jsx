//## HOOKS ##########
// import { useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//## UTILS  ###########

// ## ASSETS - RESSOURCES #############
import "./Dashboard.css";

//## COMPONENTS  ###########
import Title from "../../components/Title";
import NoteList from "../../components/NoteList";
import Button from "../../components/Button";

export default function Dashboard() {
  const navigate = useNavigate();
  const notes = useSelector((store) => store.NOTE.noteList);
  return (
    <>
      <main className="Content">
        <Title />
        <NoteList notes={notes} />
      </main>
      <footer className="FooterDash">
        <Button
          label="Add note"
          parentClass="FooterDash-button"
          clickHandler={() => {
            navigate("/note/add");
          }}
        />
      </footer>
    </>
  );
}
