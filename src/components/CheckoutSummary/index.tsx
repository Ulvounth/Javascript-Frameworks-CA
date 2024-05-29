import styled from 'styled-components';
import Button from '../Button';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

const CheckoutTotalSum = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 1005px) {
    margin: 1em 0;
`;

const CheckoutTotalSumSticky = styled.div`
  position: sticky;
  top: var(--header-size);
  padding: 2em;
`;

const CheckoutTotalSumHeader = styled.div`
  h2 {
    margin-bottom: 1em;
  }
`;

const CheckoutTotalSumContent = styled.div``;

const CheckoutTotalSumList = styled.ul`
  list-style: none;

  & li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 2em;

    span {
      margin-bottom: 2em;

      &:last-of-type {
        justify-self: end;
      }
    }
  }
`;

const CheckoutTotalSumButton = styled(Button)``;

const CheckoutTotalSumSection = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const cart = useContext(CartContext);

  const totalSum =
    cart?.reduce((acc, product) => {
      const price = product.discountedPrice
        ? product.discountedPrice
        : product.price;
      return acc + price * product.quantity;
    }, 0) || 0;

  const handleOnCheckoutClicked = () => {
    if (cart?.length === 0) {
      showToast('Please add a item in your cart!', 'error');
      return;
    }

    navigate('/checkoutSuccess');
  };

  return (
    <CheckoutTotalSum>
      <CheckoutTotalSumSticky>
        <CheckoutTotalSumHeader>
          <h2>Summary</h2>
        </CheckoutTotalSumHeader>
        <CheckoutTotalSumContent>
          <CheckoutTotalSumList>
            <li>
              <span>Total Sum</span>
              <span>${totalSum.toFixed(2)}</span>
            </li>
          </CheckoutTotalSumList>
          <CheckoutTotalSumButton onClick={handleOnCheckoutClicked} fullWidth>
            Checkout
          </CheckoutTotalSumButton>
        </CheckoutTotalSumContent>
      </CheckoutTotalSumSticky>
    </CheckoutTotalSum>
  );
};

export default CheckoutTotalSumSection;
