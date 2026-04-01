//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../helpers/classManager"

// ## ASSETS - RESSOURCES #############
import './NoteCard.css';
import icoEdit from "../../assets/img/ico-edit.png";
import icoPalet from "../../assets/img/ico-palet.png";
import icoPinned from "../../assets/img/ico-pin.png";
import icoUnPinned from "../../assets/img/ico-unpin.png";

//## COMPONENTS  ###########


export default function NoteCard({isPinned,title,description,date,parentClass,colorCustom}) {
  console.log(parentClass);
  const dynamicClass = classManager([parentClass,"NoteCard",colorCustom])
  // const getParentClass = parentClass? parentClass + " " : "" ;
  // const dynamicClass = getParentClass + " NoteCard";

  return (
    <article className={dynamicClass}>
      <header className="NoteCard-header">
        <h2 className="NoteCard-header-title">{title}</h2>
        {isPinned 
        ? <button className="NoteCard-header-button Button"><img src={icoPinned} className="Button-img" /></button>
        : <button className="NoteCard-header-button Button"><img src={icoUnPinned} className="Button-img" /></button>}
      </header>
      <div className="NoteCard-content">
        {description}
      </div>
      <footer className="NoteCard-footer">
          <strong className="NoteCard-footer-date">{date}</strong>
          <menu className="NoteCard-footer-manage">
              <button className="NoteCard-footer-manage-button Button"><img src={icoPalet} className="Button-img edit" /></button>
              <button className="NoteCard-footer-manage-button Button"><img src={icoEdit} className="Button-img colors" /></button>
          </menu>

      </footer>

      
    </article>
  );

}