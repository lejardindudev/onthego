//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

//## UTILS  ###########
// import classManager from "../../utils/classManager"

// ## ASSETS - RESSOURCES #############
import "./SingleNotePage.css";

//## COMPONENTS  ###########
import Title from "../../components/Title";
import NoteCardForm from "../../components/NoteCardForm";
import { Link } from "react-router-dom";

export default function SingleNote({}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const notes = useSelector((store) => store.NOTE.noteList) || [];
  if (notes.length <= 0) {
    return <p>Chargement ...</p>;
  }
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return (
      <>
        <Link className="SingleNote-backLink" to="/">
          back to dashboard
        </Link>
        <p>Note not found !</p>
      </>
    );
  }

  return (
    <>
      <main className="SingleNote">
        <Link className="SingleNote-backLink" to="/">
          back to dashboard
        </Link>

        <Title />
        <NoteCardForm
          parentClass="SingleNote-note"
          type="show"
          note={note}
          activeColor={note.color}
          // id={note.id}
          // title={note.title}
          // description={note.description}
          // date={note.date}
          // isPinned={note.isPinned}
          // colorCustom={note.color}
        />
      </main>
      {/* <footer className='FooterDash'>
              <Button 
                label="Add note"
                parentClass="FooterDash-button" 
                clickHandler={()=> {console.log("click!")}}
                />
            </footer> */}
    </>
  );
}
