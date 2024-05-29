import styled from 'styled-components';
import Tag from '../../components/Tag';
import { Link } from 'react-router-dom';
import StarRating from '../../components/StarRating';
import calculateDiscountedPrice from '../../utils/calculateDiscount';

export type TProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: string[];
  reviews: TReview[];
};

type TReview = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

const StyledProducts = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1em;
`;

const StyledSection = styled.section`
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

const StyledProduct = styled.li`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  a {
    text-decoration: none;
  }
`;

const StyledProductImageWrapper = styled.div`
  aspect-ratio: 1/1;
  overflow: hidden;

  img:hover {
    scale: 1.1;
  }
`;

const StyledProductImage = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  transition: 250ms;
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: #ffffffdb;
  color: black;
  height: 10rem;
`;

const StyledTagsWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 0.5em;
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  justify-content: space-between;
  margin-top: auto;
`;

const PriceText = styled.p`
  margin: 0;
  padding: 0;
  color: #333;
  font-size: 1rem;

  span.discounted {
    text-decoration: line-through;
    color: #777;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscountPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #e53e3e;
  font-size: 1rem;
`;

type ProductsProps = {
  products: TProduct[] | null;
};

const Products = ({ products }: ProductsProps) => {
  console.log(products);

  return (
    <StyledSection>
      <h1 id="store">Store</h1>
      <StyledProducts>
        {products?.map((product) => (
          <StyledProduct key={product.id}>
            <Link to={`/product/${product.id}`}>
              <StyledProductImageWrapper>
                <StyledProductImage
                  src={product.imageUrl}
                  alt={product.description}
                />
              </StyledProductImageWrapper>
              <StyledDescriptionWrapper>
                <h3>{product.title}</h3>
                <PriceContainer>
                  {product.discountedPrice &&
                  product.discountedPrice < product.price ? (
                    <>
                      <DiscountPriceContainer>
                        <span>${product.discountedPrice.toFixed(2)}</span>
                        {product.price !== product.discountedPrice && (
                          <span>
                            {calculateDiscountedPrice(
                              product.price,
                              product.discountedPrice
                            )}
                            % OFF
                          </span>
                        )}
                      </DiscountPriceContainer>
                      <PriceText>
                        Original price:{' '}
                        <span className="discounted">
                          ${product.price.toFixed(2)}
                        </span>
                      </PriceText>
                    </>
                  ) : (
                    <PriceText>${product.price.toFixed(2)}</PriceText>
                  )}
                </PriceContainer>
                <ReviewContainer>
                  <StarRating rating={product.rating ?? 0} />
                  <span>{product.reviews.length} reviews</span>
                </ReviewContainer>
              </StyledDescriptionWrapper>
              <StyledTagsWrapper>
                {product.tags?.map((tag) => <Tag key={tag} tag={tag} />)}
              </StyledTagsWrapper>
            </Link>
          </StyledProduct>
        ))}
      </StyledProducts>
    </StyledSection>
  );
};

export default Products;
