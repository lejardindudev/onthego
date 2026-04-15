//## HOOKS ##########
import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

//## UTILS  ###########

// ## ASSETS - RESSOURCES #############
import "./SingleNotePage.css";

//## COMPONENTS  ###########
import Title from "../../components/Title";
import NoteCardForm from "../../components/NoteCardForm";
import { Link } from "react-router-dom";

export default function SingleNote({}) {
  const { id } = useParams();
  const notes = useSelector((store) => store.NOTE.noteList) || [];
  if (notes.length <= 0) {
    return <p>Chargement ...</p>;
  }
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return (
      <>
        <Link className="SingleNote-backLink" to="/">
          back to dashboard
        </Link>
        <p>Note not found !</p>
      </>
    );
  }
  return (
    <>
      <main className="SingleNote">
        <Link className="SingleNote-backLink" to="/">
          back to dashboard
        </Link>

        <Title />
        <NoteCardForm
          parentClass="SingleNote-note"
          type="show"
          note={note}
          activeColor={note.color}
        />
      </main>
    </>
  );
}
