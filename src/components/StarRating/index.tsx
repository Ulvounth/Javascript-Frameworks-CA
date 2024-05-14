import styled from 'styled-components';
import { FullStar, HalfStar, EmptyStar } from '../Icons';

const StarsContainer = styled.div`
  display: inline-block;
`;

const Star = styled.span`
  position: relative;
  display: inline-block;
  color: gold;
  font-size: 20px;
  line-height: 1;

  // Adjust empty and half star colors if necessary
  &.empty,
  &.half {
    color: #ccc;
  }
`;

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <StarsContainer>
      {Array.from({ length: 5 }, (_, index) => {
        const fullStars = Math.floor(rating);
        const halfStar = index === fullStars && rating % 1 >= 0.5;

        return (
          <Star
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
          </Star>
        );
      })}
    </StarsContainer>
  );
};

export default StarRating;
