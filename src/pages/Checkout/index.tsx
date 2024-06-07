import * as Styled from './index.styles';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Product from '../../components/Product';
import CheckoutTotalSumSection from '../../components/CheckoutSummary';

const Checkout = () => {
  const cart = useContext(CartContext);

  useDocumentTitle('Infinity Goods | Checkout');

  return (
    <Styled.Section>
      <Styled.CheckoutContainer>
        <Styled.CheckoutProductsSection>
          <Styled.CheckoutProductsHeader>
            <Styled.CheckoutProductsHeaderTitle>
              PRODUCT
            </Styled.CheckoutProductsHeaderTitle>
            <Styled.CheckoutProductsHeaderTitle>
              PRICE
            </Styled.CheckoutProductsHeaderTitle>
            <Styled.CheckoutProductsHeaderTitle>
              QUANTITY
            </Styled.CheckoutProductsHeaderTitle>
            <Styled.CheckoutProductsHeaderTitle>
              TOTAL
            </Styled.CheckoutProductsHeaderTitle>
          </Styled.CheckoutProductsHeader>
          {cart?.map((product) => {
            return <Product key={product.id} product={product} />;
          })}{' '}
          {cart?.length === 0 && <p>Your cart is empty.</p>}
          <Styled.CheckoutContinueShoppingSection>
            <Styled.CheckoutContinueShoppingLink to="/#store">
              Continue Shopping
            </Styled.CheckoutContinueShoppingLink>
          </Styled.CheckoutContinueShoppingSection>
        </Styled.CheckoutProductsSection>
        <CheckoutTotalSumSection />
      </Styled.CheckoutContainer>
    </Styled.Section>
  );
};

export default Checkout;
