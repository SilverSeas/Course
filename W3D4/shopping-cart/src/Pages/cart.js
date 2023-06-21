import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
// import { useState, useEffect } from 'react';
import CartItem from '../Components/Cart/CartItems';
import { Link } from 'react-router-dom';
import {v4} from 'uuid'

export default function Cart() {
  // const dispatch = useDispatch()
    // Get the cart state from the sto
  const cart = useSelector(state =>state.cart.cartList)
  // console.log(cart)


  
  let total = 0
   // Calculate the total price of all items in the cart
  cart.forEach(price => {
    total += price.item.price
    // console.log(total)
  }); 

  // If the cart is empty, render a message and a link to the shop
  if (cart.length === 0){
    return(
      <div className='Cart'>
        <h2>Your cart is empty...</h2>
        <br/>
        <Link className='btn' to={'/'}>Go to Shop</Link>
      </div>
    )
  }

   // Render the cart items with their respective details, and the total price
  return (
    <div className='Cart'>
      <h2>My Cart</h2><br/>
      <div className='Cart-container'>
          {cart.map((item,index) =>{
            let id= v4()
            return <CartItem key={index} id={id} item={item}/>
            // return <CartItem key={item.productID} cart={cart} item={item.shirt}/>
          }
          )}
      </div>
      <div className='total_price'>
          <p>Total</p>
          <h4>${total}</h4>
      </div>
     
    </div>
  );
}
