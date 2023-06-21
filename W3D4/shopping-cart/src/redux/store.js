import { configureStore } from "@reduxjs/toolkit";
import productReducer from'./Slices/ProductSlice';
import CartReducer from './Slices/cartSlice';
import userReducer from './Slices/userSlice';


export default configureStore({
    
    reducer: {
        getItem: productReducer,
        cart: CartReducer
    }
});