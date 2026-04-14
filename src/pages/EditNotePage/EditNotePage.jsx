//## HOOKS ##########
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNote } from "../../store/notes/notesSlice";
import { useNavigate, useParams } from "react-router-dom";

//## UTILS  ###########
// import classManager from "../../utils/classManager"
import NoteApi from "../../api/noteApi";
import VALIDATORS from "../../services/validate/noteValidator";

// ## ASSETS - RESSOURCES #############
import "./EditNotePage.css";
import icoSettings from "../../assets/img/ico-settings.png";

//## COMPONENTS  ###########
import Title from "../../components/Title";
import NoteCardForm from "../../components/NoteCardForm";
import SettingsCardEdit from "../../components/SettingsCardEdit";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function EditNotePage() {
  // App Router initialisation
  const navigate = useNavigate();
  const { id } = useParams();

  // Dispatch initialisation
  const dispatch = useDispatch();

  // Reading store
  const notes = useSelector((store) => store.NOTE.noteList) || [];
  const note = notes.find((note) => note.id === id);

  //UI states
  const [isVisibleSettings, setIsVisibleSettings] = useState(false);

  // FormState
  const [formErrors, setFormErrors] = useState({
    title: undefined,
    description: undefined,
  });

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    isPinned: "",
    color: "",
  });
  //Settings states
  const [activeColor, setActiveColor] = useState(undefined);

  useEffect(() => {
    if (!note) return;
    setActiveColor(note.color);
  }, [note]);

  useEffect(() => {
    if (!note) return;
    setFormValues({
      title: note.title,
      description: note.description,
      isPinned: note.isPinned,
      color: note.color,
    });
  }, [note]);

  // Renders conditionnels quand datas !ready
  if (notes.length <= 0) {
    return <p>Chargement ...</p>;
  }

  if (!note) {
    return <p>Note introuvable</p>;
  }

  // Form's submit buttons handlers
  const handleSubmit = async () => {
    const updatedNote = await NoteApi.update({ ...note, ...formValues });
    dispatch(updateNote(updatedNote));
    navigate(`/`);
  };
  const handleCancel = () => navigate(`/note/${note.id}`);

  // Global form : input Validation handlers (onChange)
  const updateFormValues = (e) => {
    console.log(formErrors);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    validateForm(e.target);
  };

  const validateForm = (field) => {
    setFormErrors({
      ...formErrors,
      [field.name]: VALIDATORS[field.name](field.value),
    });
  };

  // State du bouton
  const isActive = Object.values(formErrors).every(
    (error) => error === undefined,
  );

  // Settings : update formValues
  const isPinnnedHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.checked });
  };
  const colorPickerHandler = (e) => {
    setActiveColor(e.target.id);
    setFormValues({ ...formValues, color: e.target.id });
  };
  const showHideSettings = () => {
    console.log("Visible ? ", isVisibleSettings);
    setIsVisibleSettings(!isVisibleSettings);
  };
  return (
    <>
      <main className="SingleNote">
        <Link className="SingleNote-backLink" to="/">
          back to dashboard
        </Link>
        <Title
          // TODO:
          content="Update your note"
          baseline="Organize your throughs with elegance"
        />
        <div className="EditNoteArea">
          <NoteCardForm
            isEditable={true}
            type="edit"
            note={note}
            parentClass="SingleNote-note EditNote-note"
            formValues={formValues}
            formErrors={formErrors}
            onChange={updateFormValues}
            activeColor={activeColor}
          />
          <div className="EditNoteArea-bottomTabWrapper">
            <SettingsCardEdit
              parentClass="EditNoteArea-bottomTabWrapper-settings"
              note={note}
              activeColor={activeColor}
              // onButtonClick={colorPickerHandler}
              onPinnedClick={isPinnnedHandler}
              onColorsClick={colorPickerHandler}
              isVisible={isVisibleSettings}
            />
          </div>
        </div>
      </main>
      <footer className="FooterDash">
        <button
          onClick={showHideSettings}
          className="EditNoteArea-settingsButton FooterDash-button Button"
        >
          <img src={icoSettings} className="Button-img settings" />
        </button>
        <Button
          label="Cancel"
          parentClass="FooterDash-button secondary"
          clickHandler={handleCancel}
        />
        <Button
          label="Save"
          parentClass="FooterDash-button"
          isActive={isActive}
          clickHandler={handleSubmit}
        />
      </footer>
    </>
  );
}
