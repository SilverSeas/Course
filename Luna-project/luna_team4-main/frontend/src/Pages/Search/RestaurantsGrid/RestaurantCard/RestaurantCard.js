import starIcon from "../../../../Assets/star.svg"
import restaurantImg from "../../../../Assets/temp/restaurant-pic.jpg"
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import {
  Card,
  Details,
  RatingContainer,
  RestAddress,
  RestaurantImageContainer,
  RestaurantImg,
  RestName,
  ReviewCount
} from "./RestaurantCardStyles";
import { useNavigate } from "react-router-dom";

const RestaurantCard = (prop) => {

  const navigate = useNavigate()
  const handleClickDivRestaurantCard = (e) => {
    e.preventDefault()
    navigate(`/restaurant/${prop.restaurant.id}/`)
  }

  return (
    <Card onClick={handleClickDivRestaurantCard}>
      <Details>
        <RestName>{prop.restaurant?.name}</RestName>
        <RestAddress>{prop.restaurant?.street}</RestAddress>
        <RatingContainer>
          <RatingStars rating={prop.restaurant?.average_rating} isVoting={false} />
          <ReviewCount>{prop.restaurant?.reviews.length}</ReviewCount>
        </RatingContainer>
      </Details>
      <RestaurantImageContainer>
        <RestaurantImg src={prop.restaurant?.image}></RestaurantImg >
      </RestaurantImageContainer>
    </Card>
  );
}

export default RestaurantCard;