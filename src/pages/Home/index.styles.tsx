import styled from 'styled-components';

export const Section = styled.section`
  background-image: linear-gradient(
    194deg,
    var(--bg-secondary) 40%,
    var(--bg-primary) 40%
  );
  min-height: 100vh;
`;

export const Home = styled.div`
  position: absolute;
  top: 81.44px;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  min-height: calc(100vh + 81.44px);
  width: 100%;
  padding: 2em;
  max-width: 1440px;
  margin: 0 auto;

  h2 {
    font-size: clamp(2rem, 5vw, 4rem);
    line-height: 1;
    margin: 0;
    margin-bottom: 0.5em;
  }

  p {
    margin: 0;
    font-size: clamp(1rem, 5vw, 1.5rem);
  }

  @media screen and (max-width: 768px) {
    place-items: start;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto 1fr;
  }
`;

export const ShoppingBagIconWrapper = styled.div`
  grid-row: 1/3;
  grid-column: 2/2;

  @media screen and (max-width: 768px) {
    grid-row: 2/2;
    grid-column: 1/1;
  }
`;
