//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

//## UTILS  ###########
import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./NoteCard.css";
import icoEdit from "../../assets/img/ico-edit.png";
import icoPalet from "../../assets/img/ico-palet.png";
import icoPinned from "../../assets/img/ico-pin.png";
import icoUnPinned from "../../assets/img/ico-unpin.png";

//## COMPONENTS  ###########
import { Link } from "react-router";

export default function NoteCard({
  isPinned,
  title,
  description,
  date,
  parentClass,
  colorCustom,
  id,
}) {
  // className management
  const dynamicClass = classManager([parentClass, "NoteCard", colorCustom]);
  // Mise en place du hook navigate
  const navigate = useNavigate();
  const singleNoteUrl = `/note/${id}`;
  const editNoteUrl = `/note/${id}/edit`;

  return (
    <article className={dynamicClass}>
      <header className="NoteCard-header">
        <h2 className="NoteCard-header-title">
          <Link to={singleNoteUrl}>{title}</Link>
        </h2>
        {isPinned ? (
          <button className="NoteCard-header-button Button">
            <img src={icoPinned} className="Button-img" />
          </button>
        ) : (
          ""
        )}
      </header>
      <div className="NoteCard-content">{description}</div>
      <footer className="NoteCard-footer">
        <strong className="NoteCard-footer-date">{date}</strong>
        <menu className="NoteCard-footer-manage">
          <button className="NoteCard-footer-manage-button Button palet">
            <img src={icoPalet} className="Button-img colors" />
          </button>
          <Link
            to={editNoteUrl}
            className="NoteCard-footer-manage-button Button edit"
          >
            <img src={icoEdit} className="Button-img " />
          </Link>
        </menu>
      </footer>
    </article>
  );
}
