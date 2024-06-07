import * as Styled from './index.styles';
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
      <Styled.SuccessMessage>
        Your checkout was successful!
      </Styled.SuccessMessage>
      <p>Thank you for shopping with us.</p>
      <Link to="/">Go back to the store</Link>
    </Styled.SuccessContainer>
  );
};

export default CheckoutSuccessPage;
