import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { TProduct } from '../Products';
import StarRating from '../../components/StarRating';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Loader from '../../components/Loader';
import { CartContext, CartDispatchContext } from '../../context/CartContext';
import { useContext } from 'react';

const StyledSection = styled.section`
  display: flex;
  background-image: linear-gradient(
    15deg,
    var(--bg-primary) 40%,
    var(--bg-secondary) 40%
  );
  min-height: 100vh;
`;

// Styled components
const Container = styled.div`
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

const StyledReviewContainer = styled.div`
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

const StyledText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 1em;
`;

const StyledProductDescription = styled.div`
  background-color: var(--bg-tertiary);
  padding: 2em;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
`;

const StyledPrice = styled.h2`
  font-size: 2.5rem;
`;

const StyledProductImage = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
`;

const StyledButton = styled.button`
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

const Product = () => {
  const { id } = useParams();
  const dispatch = useContext(CartDispatchContext);
  const cart = useContext(CartContext);

  const productAlreadyExist = cart?.find((product) => product.id === id);

  const { data, isLoading, isError } = useFetch<TProduct>(
    `https://api.noroff.dev/api/v1/online-shop/${id}`
  );

  const addToCart = () => {
    if (!data) return;

    if (productAlreadyExist) return;

    dispatch({
      type: 'ADD_TO_CART',
      product: {
        ...data,
        quantity: 1,
      },
    });
  };

  useDocumentTitle(data ? `${data.title}` : 'Product');
  const reviewsLength = data?.reviews?.length ?? 0;

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <StyledSection>
      <Container>
        <StyledProductImage src={data?.imageUrl} alt={data?.title} />
        <StyledProductDescription>
          <StyledTitle>{data?.title}</StyledTitle>
          <StyledText>{data?.description}</StyledText>
          <StarRating rating={data?.rating ?? 0} />
          <StyledPrice>${data?.discountedPrice ?? data?.price}</StyledPrice>
          <StyledButton onClick={addToCart}>ADD TO CART</StyledButton>
        </StyledProductDescription>
        <StyledReviewContainer>
          <h2>Reviews</h2>
          {reviewsLength > 0 ? (
            data?.reviews.map((review) => (
              <div className="review" key={review.id}>
                <strong>{review.username}</strong> -{' '}
                <StarRating rating={review.rating} />
                <p>{review.description}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </StyledReviewContainer>
      </Container>
    </StyledSection>
  );
};

export default Product;
