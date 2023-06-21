import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/cart';
import Home from './Pages/home';
import Login from './Pages/login'
import Protection from './Components/HOC/Protection'
import Header from '../src/Components/Header/Header'


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/cart" element={<Protection route = {<Cart/>}/>}/>
{/* 3 ways to protect a route: the ProtectIF with an if clause in the useEffect, the protect.js with an if in the return value, alternatively using <Navigate/> and third right in the page that we want to display alternative here: <Route path='/cart' element={<ProtectIF accessKey={localStorage.getItem('myToken')} route={<Cart />} />}/> */}
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
