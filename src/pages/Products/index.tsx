import * as Styled from './index.styles';
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

type ProductsProps = {
  products: TProduct[] | null;
};

const Products = ({ products }: ProductsProps) => {
  return (
    <Styled.Section>
      <h1 id="store">Store</h1>
      <Styled.Products>
        {products?.map((product) => (
          <Styled.Product key={product.id}>
            <Link to={`/product/${product.id}`}>
              <Styled.ProductImageWrapper>
                <Styled.ProductImage
                  src={product.imageUrl}
                  alt={product.description}
                />
              </Styled.ProductImageWrapper>
              <Styled.DescriptionWrapper>
                <h3>{product.title}</h3>
                <Styled.PriceContainer>
                  {product.discountedPrice &&
                  product.discountedPrice < product.price ? (
                    <>
                      <Styled.DiscountPriceContainer>
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
                      </Styled.DiscountPriceContainer>
                      <Styled.PriceText>
                        Original price:{' '}
                        <span className="discounted">
                          ${product.price.toFixed(2)}
                        </span>
                      </Styled.PriceText>
                    </>
                  ) : (
                    <Styled.PriceText>
                      ${product.price.toFixed(2)}
                    </Styled.PriceText>
                  )}
                </Styled.PriceContainer>
                <Styled.ReviewContainer>
                  <StarRating rating={product.rating ?? 0} />
                  <span>{product.reviews.length} reviews</span>
                </Styled.ReviewContainer>
              </Styled.DescriptionWrapper>
              <Styled.TagsWrapper>
                {product.tags?.map((tag) => <Tag key={tag} tag={tag} />)}
              </Styled.TagsWrapper>
            </Link>
          </Styled.Product>
        ))}
      </Styled.Products>
    </Styled.Section>
  );
};

export default Products;
