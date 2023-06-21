import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentData: {}
  },
  reducers: {
    updateCommentData: (state, action) => {
      state.commentData = action.payload;
    }
  }
})

export const { updateCommentData } = commentSlice.actions;
export default commentSlice.reducer;