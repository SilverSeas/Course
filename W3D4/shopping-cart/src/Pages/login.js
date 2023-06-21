import React from 'react';
import Instance from '../axios/api'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({
      email:'',
      password: ''
    });
  
    const sendLoginData = async () => {
      // build the body from the input fields with the state
      const body = {
        "email": 'lanipep310@wiroute.com',
        "password": '1234567890'
      };
  
      // convert the body to JSON format
      const data = JSON.stringify(body);
  
      // set the headers for the POST request
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
  
      // send the POST request to the server and get the response
      const response = await Instance.post('/auth/token/', data, config);
  
      // store the access token in local storage
      localStorage.setItem('myToken', response.data.access);
    }
  
    return (
      <div>
      <form>
        <input type="text" name="email" onChange={(e) => setUser({...user, email: e.target.value})} placeholder="email"/>
        <input type="password" name="password" onChange={(e) => setUser({...user, password: e.target.value})} placeholder="password" />
        <button type="submit" onClick={sendLoginData}>submit</button>
      </form>
      <div className="Login-footer">
        <img width="50%" src="https://art.pixilart.com/c4ec72c5f32b864.gif" />
      </div>
      </div>
    );
  };
  
export default Login;