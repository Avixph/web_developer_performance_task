import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteNote } from "../services/deleteNote";

export const removeNote = createAsyncThunk(
  "discardNote/removeNote",
  async ({ id }) => {
    const data = deleteNote({ id });
    console.log("deleted data", data);
    return data;
  }
);

const deleteNoteSlice = createSlice({
  name: "discardNote",
  initialState: {
    status: null,
    removeNoteStatus: null,
  },

  extraReducers: {
    [removeNote.pending]: (state, action) => {
      state.status = "loading";
    },
    [removeNote.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.removeNoteStatus = payload;
    },
    [removeNote.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default deleteNoteSlice.reducer;
