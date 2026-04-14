//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########

// ## ASSETS - RESSOURCES #############
import "./NoteList.css";

//## COMPONENTS  ###########
import NoteCard from "../NoteCard";

export default function NoteList({ notes }) {
  const pinnedNotes = notes.filter((note) => note.isPinned);
  const otherNotes = notes.filter((note) => !note.isPinned);

  return (
    <div className="NoteList">
      <h2 className="NoteList-title">:: Pinned notes</h2>
      <section className="NoteList-pinned">
        {pinnedNotes.map((note) => {
          return (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              description={note.description}
              date={note.date}
              isPinned={note.isPinned}
              colorCustom={note.color}
            />
          );
        })}
      </section>
      <h2 className="NoteList-title">:: All your notes</h2>
      <section className="NoteList-unPinned">
        {otherNotes.map((note) => {
          return (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              description={note.description}
              date={note.date}
              isPinned={note.isPinned}
              parentClass="NoteList-unPinned-note"
              colorCustom={note.color}
            />
          );
        })}
      </section>
    </div>
  );
}
