import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchNote } from "../services/fetchNote";

export const getNote = createAsyncThunk("note/getNote", async ({ id }) => {
  const data = fetchNote({ id });
  return data;
});

const fetchNoteSlice = createSlice({
  name: "note",
  initialState: {
    status: null,
    noteStatus: null,
  },

  extraReducers: {
    [getNote.pending]: (state, action) => {
      state.status = "loading";
    },
    [getNote.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.noteStatus = payload;
    },
    [getNote.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default fetchNoteSlice.reducer;
