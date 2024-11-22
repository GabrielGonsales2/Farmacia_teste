// src/redux/store.js
import { createStore } from 'redux';

// Estado inicial
const initialState = {
  cart: [],
};

// Redutor
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.cart.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case "CLEAR_CART":  // Nova ação para limpar o carrinho
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

// Criar o store
const store = createStore(reducer);

export default store;
