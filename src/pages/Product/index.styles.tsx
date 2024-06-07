import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  background-image: linear-gradient(
    15deg,
    var(--bg-primary) 40%,
    var(--bg-secondary) 40%
  );
  min-height: 100vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  width: 100%;
  padding: 2em;
  max-width: 1440px;
  margin: auto;
  border-radius: 8px;
  color: white;
  @media screen and (max-width: 1005px) {
    grid-template-columns: 1fr;
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2em 1em;
  margin-top: 2em;
  background-color: var(--bg-tertiary);
  color: white;
  grid-column: 1/3;
  grid-row: 2/2;

  div.review {
    padding: 20px 0;
    border-bottom: 1px solid white;
  }

  @media screen and (max-width: 1005px) {
    grid-column: 1/1;
    grid-row: 3/3;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 1em;
`;

export const ProductDescription = styled.div`
  background-color: var(--bg-tertiary);
  padding: 2em;
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
`;

export const Price = styled.h2`
  font-size: 2.5rem;
`;

export const ProductImage = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
`;

export const Button = styled.button`
  background-color: var(--bg-purple);
  color: white;
  font-size: 1rem;
  border: none;
  padding: 0.5em 2em;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: var(--bg-purple-dark);
  }
`;
