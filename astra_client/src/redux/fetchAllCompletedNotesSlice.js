import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllCompletedNotes } from "../services/fetchAllCompletedNotes";

export const getAllCompletedNotes = createAsyncThunk(
  "completedNotes/getAllCompletedNotes",
  async () => {
    const data = fetchAllCompletedNotes();
    return data;
  }
);

const fetchAllCompletedNotesSlice = createSlice({
  name: "completedNotes",
  initialState: {
    status: null,
    noteStatus: null,
  },

  extraReducers: {
    [getAllCompletedNotes.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllCompletedNotes.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.noteStatus = payload;
    },
    [getAllCompletedNotes.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default fetchAllCompletedNotesSlice.reducer;
