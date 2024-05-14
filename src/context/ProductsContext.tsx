import { createContext } from 'react';
import { TProduct } from '../pages/Products';

export const ProductsContext = createContext<TProduct[] | null>(null);
