import React from 'react';
import { useDispatch } from 'react-redux';
import { remove_item } from '../../redux/Slices/cartSlice';

import './style.scss'


export default function CartItem({ item }) {
  const dispatch = useDispatch();

  // A function to handle removing an item from the cart
  const removeHandler = () => {
    console.log(item); // Log the item that we are going to remove
    dispatch(remove_item(item.item.productID)); // Dispatch action to remove the item from the cart
  };

  // Render the cart item with its name, price, and a remove button
  return (
    <div className='CartItem'>
      <div className='cart-list'>
        <h5 className='product_name'>{item.item.name}</h5>
        <h6>${item.item.price}</h6>
        <button className='btn' onClick={removeHandler}>-</button>
      </div>
    </div>
  );
}
