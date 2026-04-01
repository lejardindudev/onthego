//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########

// ## ASSETS - RESSOURCES #############
import './Dashboard.css';

//## COMPONENTS  ###########
import Title from "../Title/";
import NoteList from "../NoteList";
import Button from "../Button";

export default function Dashboard({notes}) {

  return (
    <>
      <main className="Content">
        <Title />
        <NoteList notes={notes} />
      </main>
      <footer className='FooterDash'>
        <Button 
          label="Add note"
          parentClass="FooterDash-button" 
          clickHandler={()=> {console.log("click!")}}
          />
      </footer>
    </>
  );

}