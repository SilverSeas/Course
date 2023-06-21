import styled from "styled-components";
import Star from "./Star/Star";

const StarsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const RatingStars = ({ rating, isVoting, onRatingValue }) => {
  const ratingRoundUp = Math.ceil(rating);

  return (
    <StarsContainer>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= ratingRoundUp}
          onClick={isVoting ? () => {
            onRatingValue(value);
          }
            :
            undefined
          }
        />
      ))}
    </StarsContainer>
  );
}
export default RatingStars;

