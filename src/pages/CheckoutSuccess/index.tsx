import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartDispatchContext } from '../../context/CartContext';

const SuccessContainer = styled.div`
  text-align: center;
  padding-top: 50px;
  @media screen and (max-width: 1005px) {
    padding: 200px 0;
  }
`;

const SuccessMessage = styled.h1`
  color: #4caf50;
  margin-bottom: 20px;
`;

const CheckoutSuccessPage = () => {
  const dispatch = useContext(CartDispatchContext);

  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  return (
    <SuccessContainer>
      <SuccessMessage>Your checkout was successful!</SuccessMessage>
      <p>Thank you for shopping with us.</p>
      <Link to="/">Go back to the store</Link>
    </SuccessContainer>
  );
};

export default CheckoutSuccessPage;
