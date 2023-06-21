import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviewData: {}
  },
  reducers: {
    updateReviewData: (state, action) => {
      state.reviewData = action.payload;
    }
  }
})

export const { updateReviewData } = reviewSlice.actions;
export default reviewSlice.reducer;