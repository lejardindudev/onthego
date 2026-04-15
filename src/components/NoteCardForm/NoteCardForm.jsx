//## HOOKS ##########
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { deleteNoteStore } from "../../store/notes/notesSlice";
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./NoteCardForm.css";
import icoEdit from "../../assets/img/ico-edit.png";
import icoPalet from "../../assets/img/ico-palet.png";
import icoPinned from "../../assets/img/ico-pin.png";
import icoUnPinned from "../../assets/img/ico-unpin.png";
import icoTrash from "../../assets/img/ico-trash.png";

//## COMPONENTS  ###########
import { Link } from "react-router";
import FieldErrorMsg from "../FieldErrorMsg";
import ConfirmPoppin from "../ConfirmPoppin";

export default function NoteCardForm({
  note,
  isEditable,
  type,
  onChange,
  formErrors,
  parentClass,
  activeColor,
}) {
  // Hooks initialisation
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // States
  const [isVisible, setIsVisible] = useState(false);

  const dynamicClass = classManager([
    parentClass,
    "NoteCard",
    activeColor,
    "EditCard",
  ]);

  const editNoteUrl = `/note/${note.id}/edit`;

  // deleteHandler;
  const deleteNote = async () => {
    // Updating store
    dispatch(deleteNoteStore(note.id));
    navigate("/");
  };
  const backToNote = () => {
    setIsVisible(false);
  };
  const showConfirm = () => {
    setIsVisible(true);
  };
  return (
    <>
      <ConfirmPoppin
        isVisible={isVisible}
        title="Are you agree with deleting current note ?"
        confirmLabel="Delete"
        cancelLabel="Cancel"
        confirmationHandler={deleteNote}
        cancellationHandler={backToNote}
      />

      <form className={dynamicClass}>
        <header className="NoteCard-header">
          {isEditable ? (
            <div className="TestedInput">
              <input
                className="NoteCard-header-title EditCard-title TestedInput-input"
                defaultValue={note.title}
                onChange={onChange}
                name="title"
              />
              <FieldErrorMsg content={formErrors.title} />
            </div>
          ) : (
            <h2 className="NoteCard-header-title">{note.title}</h2>
          )}

          {/* {isPinned 
        ? <button className="NoteCard-header-button Button"><img src={icoPinned} className="Button-img" /></button>
        : <button className="NoteCard-header-button Button"><img src={icoUnPinned} className="Button-img" /></button>} */}
        </header>
        {isEditable ? (
          <div className="TestedInput">
            <textarea
              className="NoteCard-content EditCard-content TestedInput-input"
              defaultValue={note.description}
              onChange={onChange}
              name="description"
            ></textarea>
            <FieldErrorMsg content={formErrors.description} />
          </div>
        ) : (
          <div className="NoteCard-content EditCard-content">
            <pre>{note.description}</pre>
          </div>
        )}

        <footer className="NoteCard-footer">
          <strong className="NoteCard-footer-date">{note.date}</strong>
          <menu className="NoteCard-footer-manage">
            <button className="NoteCard-footer-manage-button Button palet">
              <img src={icoPalet} className="Button-img " />
            </button>
            {type === "show" && (
              <Link
                to={editNoteUrl}
                className="NoteCard-footer-manage-button Button edit"
              >
                <img src={icoEdit} className="Button-img" />
              </Link>
            )}
            {(type === "edit" || type === "show") && (
              <>
                <button
                  onClick={showConfirm}
                  type="button"
                  className="NoteCard-footer-manage-button Button trash"
                >
                  <img src={icoTrash} className="Button-img" />
                </button>
              </>
            )}
          </menu>
        </footer>
      </form>
    </>
  );
}
