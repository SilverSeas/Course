import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    status: "idle",
    error: null
  },
  reducers: {
    updateUserData: (state, action) => {
      console.log('update user data')
      console.log(action.payload)
      state.userData = action.payload;
    }
  },

});

export const { updateUserData } = userSlice.actions;

export default userSlice.reducer;
