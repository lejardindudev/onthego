//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
// import classManager from "../../helpers/classManager"

// ## ASSETS - RESSOURCES #############
import './SingleNotePage.css';

//## COMPONENTS  ###########
import Title from "../Title";
import NoteCard from '../NoteCard';

export default function SingleNote({note}) {
// const dynamicClass = classManager([parentClass,"MyComponentClass"])
  return (
    <>
      <main className="SingleNote">
        <a href="#" className="SingleNote-backLink">back to dashboard</a>
        <Title />
        <NoteCard 
          key={note.id}
          title={note.title}
          description={note.description}
          date = {note.date} 
          isPinned = {note.isPinned} 
          parentClass= "SingleNote-note"
          colorCustom={note.color}
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