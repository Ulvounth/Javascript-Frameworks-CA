import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Product, Checkout, Contact, CheckoutSuccess, Home } from './pages';
import {
  CartContext,
  CartDispatchContext,
  cartReducer,
} from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { HelmetProvider } from 'react-helmet-async';
import { useReducer } from 'react';
import { ProductsContext } from './context/ProductsContext';
import { useFetch } from './hooks/useFetch';
import { TProduct } from './pages/Products';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const {
    data: products,
    isLoading,
    isError,
  } = useFetch<TProduct[]>('https://api.noroff.dev/api/v1/online-shop');

  if (isLoading) {
    return <Loader />;
  }

  if (isError) return <ErrorMessage />;

  return (
    <HelmetProvider>
      <ToastProvider>
        <ProductsContext.Provider value={products as TProduct[]}>
          <CartContext.Provider value={cart}>
            <CartDispatchContext.Provider value={dispatch}>
              <ScrollToTop>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route
                      path="/checkoutSuccess"
                      element={<CheckoutSuccess />}
                    />
                  </Route>
                </Routes>
              </ScrollToTop>
            </CartDispatchContext.Provider>
          </CartContext.Provider>
        </ProductsContext.Provider>
      </ToastProvider>
    </HelmetProvider>
  );
};

export default App;
