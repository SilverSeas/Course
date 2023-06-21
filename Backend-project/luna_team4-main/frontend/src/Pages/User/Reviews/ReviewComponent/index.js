import { useState, useEffect } from "react";
import { ReviewsDateP, ReviewsDescriptionDiv, ReviewsDiv, ReviewsTitleDiv } from "../ReviewStyles";
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import lunaAPI from "../../../../Axios/lunaApi";

const ReviewComponent = ({ review }) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await lunaAPI.get(`/restaurants/${review.restaurant}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurant();
  }, [review.restaurant]);

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  };

  return (
    <ReviewsDiv>
      <ReviewsTitleDiv>
        <p>{review?.review_on_restaurant?.name}</p>
        <ReviewsDateP>{formatDate(review?.date_created)}</ReviewsDateP>
      </ReviewsTitleDiv>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <RatingStars rating={review.rating} isVoting={false} />
        <ReviewsDateP style={{marginLeft: 'auto', textAlign: 'right'}}>
          {review?.rating} Stars
        </ReviewsDateP>
      </div>
      <ReviewsDescriptionDiv>
        <p>{review?.text_content}</p>
      </ReviewsDescriptionDiv>
    </ReviewsDiv>
  );
};


export default ReviewComponent;
