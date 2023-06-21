import { createSlice } from "@reduxjs/toolkit";

// Define the CartSlice using createSlice
export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [] // The initial state of the slice, an empty array to hold cart items
    },
    reducers: {
        // Define the "add_to_Cart" reducer
        add_to_Cart: (state, action) => {
            // Add the new item to the cartList array in the state
            state.cartList.push(action.payload);
            console.log(action.payload);
        },
        // Define the "remove_item" reducer
        remove_item: (state, action) => {
            // Remove the item with the matching productID from the cartList array in the state
            state.cartList = state.cartList.filter(
                (item) => item.productID !== action.payload
            );
            console.log(action.payload);
        }
    }
});

export const { add_to_Cart, remove_item } = CartSlice.actions;
export default CartSlice.reducer;
