import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'boxicons'


export default function Header() {
  // login & logout

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const login = () => {
    navigate('/login')
  }
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

//Nr of items in cart
const cartState = useSelector(state => state.cart.cartList)
const count = cartState.length;




  return (
    <div className='Header'>
        <Link to={'/'}> <h2 className='Header-title'>Mario's Shop</h2> </Link>
        
        
    <div className='Header-nav'>
        {token? (
          <button className='btn' onClick={logout}>Logout</button>
        ):(
          <button className='btn' onClick={login}>Login</button>
        )}
        <Link className='cart-icon' to={'/cart'}>
          <box-icon size='md' type='solid' color='red'  name='cart'/>
          <span className='cart-count'>{count}</span>
        </Link>
        
      </div>

    </div>
  );
}
