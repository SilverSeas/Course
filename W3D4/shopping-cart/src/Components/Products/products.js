import React from 'react';
import { useDispatch } from 'react-redux';
import { add_to_Cart } from '../../redux/Slices/cartSlice';

import './style.scss'


export default function ProductCard(props) {
  const dispatch = useDispatch();
 
  const addToCart = ()=>{
    dispatch(add_to_Cart(props))
    
  }

  return (
    <div className='Products'>
        <h3>{props.item.name}</h3>
        <img src={props.item.img}/>
       
        <div className='add_to_cart'>
          <h5> {props.item.price}</h5>
          <button className='btn' onClick={addToCart}>+</button>
        </div>
        
      
    </div>
  );
}