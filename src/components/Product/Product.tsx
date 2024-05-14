import styled from 'styled-components';
import { CartDispatchContext, CartItem } from '../../context/CartContext';
import { useContext } from 'react';

type ProductProps = {
  product: CartItem;
};

const StyledProduct = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid lightgrey;
  margin-top: 1em;
`;

const ProductImageWrapper = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const ProductImageTitle = styled.h3`
  font-weight: 200;
  margin: 1em 0;
`;

const RemoveButton = styled.button`
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

const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

const ProductQuantityButton = styled.button`
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

const ProductsTotalPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Product = ({ product }: ProductProps) => {
  const dispatch = useContext(CartDispatchContext);

  const { price, discountedPrice, imageUrl, title, quantity } = product;

  const currentPrice = discountedPrice ? discountedPrice : price;

  const handleIncreaseQuantity = () => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      id: product.id,
    });
  };

  const handleDecreaseQuantity = () => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      id: product.id,
    });
  };

  const handleRemoveItem = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: product.id,
    });
  };

  return (
    <StyledProduct>
      <ProductImageWrapper>
        <RemoveButton onClick={handleRemoveItem}>X</RemoveButton>
        <ProductImage src={imageUrl} alt={title} />
        <ProductImageTitle>{title}</ProductImageTitle>
      </ProductImageWrapper>
      <ProductPrice>${price}</ProductPrice>
      <ProductQuantity>
        <ProductQuantityButton onClick={handleDecreaseQuantity}>
          -
        </ProductQuantityButton>
        {quantity}
        <ProductQuantityButton onClick={handleIncreaseQuantity}>
          +
        </ProductQuantityButton>
      </ProductQuantity>
      <ProductsTotalPrice>
        ${Number(currentPrice * quantity).toFixed(2)}
      </ProductsTotalPrice>
    </StyledProduct>
  );
};

export default Product;
