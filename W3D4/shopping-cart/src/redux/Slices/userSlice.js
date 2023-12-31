import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        access: '',
        refresh: ''
    },
    reducers: {
    }
})

export const { } = userSlice.actions;
export default userSlice.reducer;