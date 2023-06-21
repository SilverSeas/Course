import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import { axiosMiddleware } from 'redux-axios-middleware';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_PRODUCTS_SUCCESS':
      return { ...state, loading: false, products: action.payload.data };
    case 'FETCH_PRODUCTS_FAILURE':
      return { ...state, loading: false, error: action.payload.message };
    default:
      return state;
  }
};

const client = axios.create({
  baseURL: '/',
  responseType: 'json',
});

const store = createStore(
  reducer,
  applyMiddleware(
    axiosMiddleware(client)
  )
);

export { store, fetchProducts };
