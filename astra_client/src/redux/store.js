//Redux Store will be Implemented
import { configureStore } from "@reduxjs/toolkit";
import createNoteReducer from "./createNoteSlice";
import deleteNoteReducer from "./deleteNoteSlice";
import editNoteReducer from "./editNoteSlice";
import getAllCompletedNotesReducer from "./fetchAllCompletedNotesSlice";
import getAllNotesReducer from "./fetchAllNotesSlice";
import getNoteReducer from "./fetchNoteSlice";

export default configureStore({
  reducer: {
    createNote: createNoteReducer,
    deleteNote: deleteNoteReducer,
    editNote: editNoteReducer,
    getAllCompletedNotes: getAllCompletedNotesReducer,
    getAllNotes: getAllNotesReducer,
    getNote: getNoteReducer,
  },
});
