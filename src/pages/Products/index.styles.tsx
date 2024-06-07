import styled from 'styled-components';

export const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1em;
`;

export const Section = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2em;

  h1 {
    margin: 0;
    color: #000;
    font-size: 2rem;
    margin-bottom: 0.5em;
  }
`;

export const Product = styled.li`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  a {
    text-decoration: none;
  }
`;

export const ProductImageWrapper = styled.div`
  aspect-ratio: 1/1;
  overflow: hidden;

  img:hover {
    scale: 1.1;
  }
`;

export const ProductImage = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  transition: 250ms;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: #ffffffdb;
  color: black;
  height: 10rem;
`;

export const TagsWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 0.5em;
`;

export const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  justify-content: space-between;
  margin-top: auto;
`;

export const PriceText = styled.p`
  margin: 0;
  padding: 0;
  color: #333;
  font-size: 1rem;

  span.discounted {
    text-decoration: line-through;
    color: #777;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiscountPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #e53e3e;
  font-size: 1rem;
`;
