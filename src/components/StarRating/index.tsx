import * as Styled from './index.styles';
import { FullStar, HalfStar, EmptyStar } from '../Icons';

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <Styled.StarsContainer>
      {Array.from({ length: 5 }, (_, index) => {
        const fullStars = Math.floor(rating);
        const halfStar = index === fullStars && rating % 1 >= 0.5;

        return (
          <Styled.Star
            key={index}
            className={index < fullStars ? 'full' : halfStar ? 'half' : 'empty'}
          >
            {index < fullStars ? (
              <FullStar />
            ) : halfStar ? (
              <HalfStar />
            ) : (
              <EmptyStar />
            )}
          </Styled.Star>
        );
      })}
    </Styled.StarsContainer>
  );
};

export default StarRating;
