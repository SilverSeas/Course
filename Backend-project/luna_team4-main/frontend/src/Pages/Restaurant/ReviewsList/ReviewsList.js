import styled from "styled-components";
import Review from '../ReviewsList/Review/Review'

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; 
`

const ReviewsList = ({ reviews, onNewComment }) => {
  console.log(reviews)
  return (
    <List>
      {
        reviews?.map(review => {
          return <Review key={review.id} review={review} onNewComment={onNewComment} />
        })
      }
    </List>
  );
}

export default ReviewsList;