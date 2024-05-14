import { createContext } from 'react';
import { TProduct } from '../pages/Products';

export interface CartItem extends TProduct {
  quantity: number;
}

export const CartContext = createContext<CartItem[] | null>(null);

/* ------------------------------------------------------------------- */

const defaultDispatch: CartDispatch = () => {
  throw new Error(
    'CartDispatchContext must be provided by a parent component.'
  );
};

export const CartDispatchContext = createContext<CartDispatch>(defaultDispatch);

type CartAction =
  | { type: 'ADD_TO_CART'; product: CartItem }
  | { type: 'INCREASE_QUANTITY'; id: string }
  | { type: 'DECREASE_QUANTITY'; id: string }
  | { type: 'REMOVE_FROM_CART'; id: string }
  | { type: 'CLEAR_CART' };

type CartDispatch = (action: CartAction) => void;

export const cartReducer = (cart: CartItem[], action: CartAction) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return [...cart, action.product];
    }
    case 'REMOVE_FROM_CART': {
      return cart.filter((c) => c.id !== action.id);
    }
    case 'INCREASE_QUANTITY': {
      return cart.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    case 'DECREASE_QUANTITY': {
      return cart
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    }
    case 'CLEAR_CART': {
      return [];
    }
    default: {
      throw Error('Unknown action type:');
    }
  }
};
