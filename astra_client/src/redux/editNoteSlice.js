import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { editNote } from "../services/editNote";

export const updateNote = createAsyncThunk(
  "modifyNote/updateNote",
  async ({
    // id, title, description, completion
    note,
  }) => {
    const data = editNote({
      // id,
      // title,
      // description,
      // completion,
      note,
    });

    return data;
  }
);

const editNoteSlice = createSlice({
  name: "modifyNote",
  initialState: {
    status: null,
    updateNoteStatus: null,
  },

  extraReducers: {
    [updateNote.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateNote.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.updateNoteStatus = payload;
    },
    [updateNote.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default editNoteSlice.reducer;
