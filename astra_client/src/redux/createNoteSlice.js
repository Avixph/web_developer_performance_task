import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNote } from "../services/createNote";

export const postNote = createAsyncThunk(
  "newNote/postNote",
  async ({
    // title, description,
    note,
  }) => {
    const data = createNote({
      // title, description,
      note,
    });
    return data;
  }
);

const createNoteSlice = createSlice({
  name: "newNote",
  initialState: {
    status: null,
    newNoteStatus: null,
  },

  extraReducers: {
    [postNote.pending]: (state, action) => {
      state.status = "loading";
    },
    [postNote.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.newNoteStatus = payload;
    },
    [postNote.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default createNoteSlice.reducer;
