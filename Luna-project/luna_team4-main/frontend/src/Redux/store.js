import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/user.js'
import restaurantReducer from './Slices/restaurant'


export default configureStore({
  reducer: {
    user: userReducer,
    restaurant: restaurantReducer
  }
});