//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
// import classManager from "../../helpers/classManager"

// ## ASSETS - RESSOURCES #############
import './EditNotePage.css';

//## COMPONENTS  ###########
import Title from "../Title";
import NoteCardEdit from "../NoteCardEdit";
import SettingsCardEdit from "../SettingsCardEdit";
import Button from "../Button";

export default function EditNotePage({note}) {
// const dynamicClass = classManager([parentClass,"MyComponentClass"])
  return (
    <>
      
        <main className="SingleNote">
          <a href="#" className="SingleNote-backLink">back to dashboard</a>
          <Title 
          // TODO:
            content=""
            baseline=""
          />
          <div className="EditNoteArea">
            <NoteCardEdit 
              key={note.id}
              title={note.title}
              description={note.description}
              date = {note.date} 
              isPinned = {note.isPinned} 
              parentClass= "SingleNote-note EditNote-note"
              colorCustom={note.color}
            />
            <SettingsCardEdit 
              parentClass="EditNoteArea-settings"
            
            />
          </div>
        </main>
      <footer className='FooterDash'>
        <Button 
        label="Cancel"
        parentClass="FooterDash-button secondary" 
        clickHandler={()=> {console.log("click!")}}
        />
        <Button 
          label="Save"
          parentClass="FooterDash-button" 
          clickHandler={()=> {console.log("click!")}}
          />
      </footer>
    </>
  );

}