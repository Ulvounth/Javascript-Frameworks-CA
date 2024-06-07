import * as Styled from './index.styles';
import { CartDispatchContext, CartItem } from '../../context/CartContext';
import { useContext } from 'react';

type ProductProps = {
  product: CartItem;
};

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
    <Styled.Product>
      <Styled.ProductImageWrapper>
        <Styled.RemoveButton onClick={handleRemoveItem}>X</Styled.RemoveButton>
        <Styled.ProductImage src={imageUrl} alt={title} />
        <Styled.ProductImageTitle>{title}</Styled.ProductImageTitle>
      </Styled.ProductImageWrapper>
      <Styled.ProductPrice>${discountedPrice}</Styled.ProductPrice>
      <Styled.ProductQuantity>
        <Styled.ProductQuantityButton onClick={handleDecreaseQuantity}>
          -
        </Styled.ProductQuantityButton>
        {quantity}
        <Styled.ProductQuantityButton onClick={handleIncreaseQuantity}>
          +
        </Styled.ProductQuantityButton>
      </Styled.ProductQuantity>
      <Styled.ProductsTotalPrice>
        ${Number(currentPrice * quantity).toFixed(2)}
      </Styled.ProductsTotalPrice>
    </Styled.Product>
  );
};

export default Product;
