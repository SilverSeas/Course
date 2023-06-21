import ReviewCard from './ReviewCard/ReviewCard'
import {useOutletContext} from "react-router-dom";
import UserCard from "../UsersGrid/UserCard/UserCard";

const ReviewssGrid = () => {

    const [listOfRestaurantFiltered, listOfUsersFiltered, listOfReviewsFiltered, qtyReviews] = useOutletContext();

  return (
    <>
        {listOfReviewsFiltered.map((review,index)=>{
            return <ReviewCard review={review} key={index} qtyReviews={qtyReviews}/>
        })}
    </>
  );
}

export default ReviewssGrid;