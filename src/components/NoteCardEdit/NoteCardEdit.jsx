//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../helpers/classManager"

// ## ASSETS - RESSOURCES #############
import './NoteCardEdit.css';
import icoEdit from "../../assets/img/ico-edit.png";
import icoPalet from "../../assets/img/ico-palet.png";
import icoPinned from "../../assets/img/ico-pin.png";
import icoUnPinned from "../../assets/img/ico-unpin.png";
//## COMPONENTS  ###########


export default function NoteCardEdit({isPinned,title,description,date,parentClass,colorCustom}) {
const dynamicClass = classManager([parentClass,"NoteCard",colorCustom,"EditCard"]);
  return (
    <form className={dynamicClass}>
      <header className="NoteCard-header">
        <input className="NoteCard-header-title EditCard-title" defaultValue={title} />
        {/* {isPinned 
        ? <button className="NoteCard-header-button Button"><img src={icoPinned} className="Button-img" /></button>
        : <button className="NoteCard-header-button Button"><img src={icoUnPinned} className="Button-img" /></button>} */}
      </header>
      <textarea className="NoteCard-content EditCard-content" defaultValue={description} >
        
      </textarea>
      <footer className="NoteCard-footer">
          <strong className="NoteCard-footer-date">{date}</strong>
          <menu className="NoteCard-footer-manage">
              <button className="NoteCard-footer-manage-button Button"><img src={icoPalet} className="Button-img edit" /></button>
              <button className="NoteCard-footer-manage-button Button"><img src={icoEdit} className="Button-img colors" /></button>
          </menu>
      </footer>
    </form>
  );

}