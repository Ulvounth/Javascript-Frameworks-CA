import styled from 'styled-components';
import Button from '../Button';

export const CheckoutTotalSum = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 1005px) {
    margin: 1em 0;
`;

export const CheckoutTotalSumSticky = styled.div`
  position: sticky;
  top: var(--header-size);
  padding: 1em;
`;

export const CheckoutTotalSumHeader = styled.div`
  h2 {
    margin-bottom: 1em;
  }
`;

export const CheckoutTotalSumContent = styled.div``;

export const CheckoutTotalSumList = styled.ul`
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

export const CheckoutTotalSumButton = styled(Button)``;
