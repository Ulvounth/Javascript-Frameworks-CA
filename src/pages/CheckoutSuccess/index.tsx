import * as Styled from './index.styles';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartDispatchContext } from '../../context/CartContext';

const CheckoutSuccessPage = () => {
  const dispatch = useContext(CartDispatchContext);

  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  return (
    <Styled.SuccessContainer>
      <Helmet>
        <title>Successful Checkout | Infnity Goods</title>
        <meta
          name="description"
          content="Your checkout was successful! Thank you for your purchase. You can continue to browse our store for more items."
        />
      </Helmet>
      <Styled.SuccessMessage>
        Your checkout was successful!
      </Styled.SuccessMessage>
      <p>Thank you for shopping with us.</p>
      <Link to="/">Go back to the store</Link>
    </Styled.SuccessContainer>
  );
};

export default CheckoutSuccessPage;
