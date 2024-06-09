import * as Styled from './index.styles';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { TProduct } from '../Products';
import StarRating from '../../components/StarRating';
import Loader from '../../components/Loader';
import { CartContext, CartDispatchContext } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { useContext } from 'react';

const Product = () => {
  const { id } = useParams();
  const dispatch = useContext(CartDispatchContext);
  const cart = useContext(CartContext);
  const { showToast } = useToast();

  const productAlreadyExist = cart?.find((product) => product.id === id);

  const { data, isLoading, isError } = useFetch<TProduct>(
    `https://api.noroff.dev/api/v1/online-shop/${id}`
  );

  const addToCart = () => {
    if (!data) return;

    if (productAlreadyExist) {
      showToast('Product already in your cart!', 'error');
      return;
    }

    dispatch({
      type: 'ADD_TO_CART',
      product: {
        ...data,
        quantity: 1,
      },
    });
    showToast('Added to cart successfully!', 'success');
  };

  const reviewsLength = data?.reviews?.length ?? 0;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Styled.Section>
      <Helmet>
        <title>
          {data ? `${data.title} | Infnity Goods` : 'Product | Infnity Goods'}
        </title>
        <meta
          name="description"
          content={
            data
              ? data.description
              : 'View product details, reviews, and add to your cart.'
          }
        />
      </Helmet>
      <Styled.Container>
        <Styled.ProductImage src={data?.imageUrl} alt={data?.title} />
        <Styled.ProductDescription>
          <Styled.Title>{data?.title}</Styled.Title>
          <Styled.Text>{data?.description}</Styled.Text>
          <StarRating rating={data?.rating ?? 0} />
          <Styled.Price>${data?.discountedPrice ?? data?.price}</Styled.Price>
          <Styled.Button onClick={addToCart}>ADD TO CART</Styled.Button>
        </Styled.ProductDescription>
        <Styled.ReviewContainer>
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
        </Styled.ReviewContainer>
      </Styled.Container>
    </Styled.Section>
  );
};

export default Product;
