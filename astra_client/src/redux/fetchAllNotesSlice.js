import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllNotes } from "../services/fetchAllNotes";

export const getAllNotes = createAsyncThunk("notes/getAllNotes", async () => {
  const data = fetchAllNotes();
  console.log("data from slice", data);
  return data;
});

const fetchAllNotesSlice = createSlice({
  name: "notes",
  initialState: {
    status: null,
    noteStatus: null,
  },

  extraReducers: {
    [getAllNotes.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllNotes.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.noteStatus = payload;
    },
    [getAllNotes.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default fetchAllNotesSlice.reducer;
