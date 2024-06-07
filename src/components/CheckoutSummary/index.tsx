import * as Styled from './index.styles';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

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
    <Styled.CheckoutTotalSum>
      <Styled.CheckoutTotalSumSticky>
        <Styled.CheckoutTotalSumHeader>
          <h2>Summary</h2>
        </Styled.CheckoutTotalSumHeader>
        <Styled.CheckoutTotalSumContent>
          <Styled.CheckoutTotalSumList>
            <li>
              <span>Total Sum</span>
              <span>${totalSum.toFixed(2)}</span>
            </li>
          </Styled.CheckoutTotalSumList>
          <Styled.CheckoutTotalSumButton
            onClick={handleOnCheckoutClicked}
            fullWidth
          >
            Checkout
          </Styled.CheckoutTotalSumButton>
        </Styled.CheckoutTotalSumContent>
      </Styled.CheckoutTotalSumSticky>
    </Styled.CheckoutTotalSum>
  );
};

export default CheckoutTotalSumSection;
