import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './Styles/Globalstyles.styles'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import myStore from "./Redux/store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
);
