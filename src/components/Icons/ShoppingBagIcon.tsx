import styled from 'styled-components';

const StyledImage = styled.img`
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

const ShoppingBagIcon = () => {
  return <StyledImage src="./images/shopping-icone.png" alt="heading" />;
};

export default ShoppingBagIcon;
