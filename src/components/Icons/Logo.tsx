import styled from 'styled-components';

const StyledLogo = styled.div`
  width: 60px;
  img {
    border-radius: 10%;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <img src="./images/infinity-goods.png" alt="logo" />
    </StyledLogo>
  );
};

export default Logo;
