import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const Section = styled.section`
  background-image: linear-gradient(
    100deg,
    var(--bg-primary) 50%,
    var(--bg-secondary) 40%
  );
  min-height: 100vh;
`;

export const CheckoutProductsHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid lightgrey;
  padding: 1em 0;
`;

export const CheckoutProductsHeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-of-type {
    justify-content: start;
  }
`;

export const CheckoutContainer = styled.section`
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

export const CheckoutProductsSection = styled.div`
  padding: 1em;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const CheckoutContinueShoppingSection = styled.div`
  padding: 1em 0;
`;

export const CheckoutContinueShoppingLink = styled(HashLink)`
  text-decoration: none;
  color: white;
  padding: 5px;
  border-radius: 5px;
  background-color: var(--bg-purple);
`;
