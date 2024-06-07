import styled from 'styled-components';

export const Product = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid lightgrey;
  margin-top: 1em;
`;

export const ProductImageWrapper = styled.div`
  position: relative;
`;

export const ProductImage = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const ProductImageTitle = styled.h3`
  font-weight: 200;
  margin: 1em 0;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 1.6em;
  height: 1.6em;
  font-size: 1rem;

  &:hover {
    background-color: #ff2c10; // Darker shade on hover
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

export const ProductQuantityButton = styled.button`
  background-color: var(--bg-purple);
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: var(--bg-purple-dark);
  }
`;

export const ProductsTotalPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
