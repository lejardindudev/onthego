//## HOOKS ##########
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

//## UTILS  ###########
import NoteApi from "../../api/noteApi";
import { addNote } from "../../store/notes/notesSlice";
import VALIDATORS from "../../services/validate/noteValidator";
// import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./CreateNotePage.css";

//## COMPONENTS  ###########
import { Link } from "react-router";
import Title from "../../components/Title";
import NoteCardForm from "../../components/NoteCardForm";
import Button from "../../components/Button";
export default function CreateNotePage({}) {
  // initialisation des hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // TODO: centraliser pour EditNotePage également
  // State pour catcher les valeurs des champs au fil de l'eau et stocker les erreurs
  const [formValues, setFormValues] = useState({ title: "", description: "" });
  const [formErrors, setFormErrors] = useState({
    title: undefined,
    description: undefined,
  });

  // Gestion du create
  const createHandler = async () => {
    const newNote = await NoteApi.create({
      ...formValues,
      date: new Date().toLocaleDateString(),
      isPinned: false,
      colorCustom: "",
    });
    dispatch(addNote(newNote));
    navigate("/");
  };

  // test Des valeurs du champs
  const validateInput = (fieldName, fieldValue) => {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATORS[fieldName](fieldValue),
    });
  };

  // Gestion des valeurs des champs du form
  const updateFormValues = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value }); //async
    validateInput(e.target.name, e.target.value);
  };

  // Gestion de l'état de validation
  const activeButton =
    // each formErrors est  undefined  &&
    Object.values(formErrors).every((field) => {
      return field === undefined;
    }) &&
    // each formValues n'est pas vide
    Object.values(formValues).every((field) => {
      return typeof field === "string" && field.length > 0;
    });

  return (
    <>
      <main className="SingleNote">
        <Link className="SingleNote-backLink" to="/">
          back to dashboard
        </Link>

        <Title />
        <NoteCardForm
          parentClass="SingleNote-note"
          isEditable={true}
          type="create"
          note={[]}
          formValues={formValues}
          formErrors={formErrors}
          onChange={updateFormValues}
          // id={note.id}
          // title={note.title}
          // description={note.description}
          // date={note.date}
          // isPinned={note.isPinned}
          // colorCustom={note.color}
        />
      </main>
      <footer className="FooterDash">
        <Button
          label="Create note"
          parentClass="FooterDash-button"
          clickHandler={createHandler}
          isActive={activeButton}
        />
      </footer>
    </>
  );
}
