import styled from 'styled-components';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Product from '../../components/Product';
import { HashLink } from 'react-router-hash-link';
import CheckoutTotalSumSection from '../../components/CheckoutSummary';

// Styled components
const StyledSection = styled.section`
  background-image: linear-gradient(
    100deg,
    var(--bg-primary) 50%,
    var(--bg-secondary) 40%
  );
  min-height: 100vh;
`;

const CheckoutProductsHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid lightgrey;
  padding: 1em 0;
`;

const CheckoutProductsHeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-of-type {
    justify-content: start;
  }
`;

const CheckoutContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr auto;
  max-width: 1440px;
  column-gap: 2em;
  margin: 0 auto;
  padding: 2em;

  @media screen and (max-width: 1005px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const CheckoutProductsSection = styled.div`
  padding: 1em;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const CheckoutContinueShoppingSection = styled.div`
  padding: 1em 0;
`;

const CheckoutContinueShoppingLink = styled(HashLink)`
  text-decoration: none;
  color: white;
  padding: 5px;
  border-radius: 5px;
  background-color: var(--bg-purple);
`;

const Checkout = () => {
  const cart = useContext(CartContext);

  useDocumentTitle('Infinity Goods | Checkout');

  return (
    <StyledSection>
      <CheckoutContainer>
        <CheckoutProductsSection>
          <CheckoutProductsHeader>
            <CheckoutProductsHeaderTitle>PRODUCT</CheckoutProductsHeaderTitle>
            <CheckoutProductsHeaderTitle>PRICE</CheckoutProductsHeaderTitle>
            <CheckoutProductsHeaderTitle>QUANTITY</CheckoutProductsHeaderTitle>
            <CheckoutProductsHeaderTitle>TOTAL</CheckoutProductsHeaderTitle>
          </CheckoutProductsHeader>
          {cart?.map((product) => {
            return <Product key={product.id} product={product} />;
          })}{' '}
          {cart?.length === 0 && <p>Your cart is empty.</p>}
          <CheckoutContinueShoppingSection>
            <CheckoutContinueShoppingLink to="/#store">
              Continue Shopping
            </CheckoutContinueShoppingLink>
          </CheckoutContinueShoppingSection>
        </CheckoutProductsSection>
        <CheckoutTotalSumSection />
      </CheckoutContainer>
    </StyledSection>
  );
};

export default Checkout;
