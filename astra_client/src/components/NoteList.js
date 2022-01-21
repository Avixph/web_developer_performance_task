import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllNotes } from "../redux/fetchAllNotesSlice";
import CreateNote from "./CreateNote";
import Note from "./Note";

const NoteList = () => {
  const dispatch = useDispatch();
  // const [notes, setNotes] = useState([]);

  const notes = useSelector((state) => state?.getAllNotes?.noteStatus);
  console.log("notes", notes);

  const newNoteStatus = useSelector((state) => state?.createNote?.status);

  const updateNoteStatus = useSelector((state) => state?.editNote?.updateNote);

console.log("edit status", updateNoteStatus);

  // const sortedNotes = notes
  //   ?.map((note) => ({
  //     ...note,
  //   }))
  //   ?.sort((a, b) => {
  //     let dateA = a.createdAt;
  //     let dateB = b.createdAt;

  //     return new Date(dateB).getTime() - new Date(dateA).getTime();
  //   });

  const showNotes = notes?.map((note, index) => {
    return <Note {...note} key={index} />;
  });

  useEffect(() => {
    dispatch(getAllNotes());
  }, []);

  useEffect(() => {
    dispatch(getAllNotes());
  }, [newNoteStatus]);

  return (
    <div>
      <div className="pt-8">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-2">
            <CreateNote />
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0 ">
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {showNotes}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NoteList;
