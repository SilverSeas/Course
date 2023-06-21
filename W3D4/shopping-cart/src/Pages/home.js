import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../Components/Products/products'


export default function Home() {
// Get state from the store
const items = useSelector(state => state.getItem.storage)



  return (
    <div className='Home'>


      <div className='Products-display'>
        {items.map((item)=>
          <Products key={item.productID} item={item}/>
        
        )}
  
      </div>
      
    </div>
  );
}
