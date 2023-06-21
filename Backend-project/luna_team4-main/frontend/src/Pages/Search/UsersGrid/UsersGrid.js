import UserCard from './UserCard/UserCard'
import {useOutletContext} from "react-router-dom";
import RestaurantCard from "../RestaurantsGrid/RestaurantCard/RestaurantCard";

const UsersGrid = () => {

    const [listOfRestaurantFiltered, listOfUsersFiltered, listOfReviewsFiltered, qtyReviews] = useOutletContext();
  return (
    <>
        {listOfUsersFiltered.map((user,index)=>{
            return <UserCard user={user} key={index} qtyReviews={qtyReviews}/>
        })}
    </>
  );
}

export default UsersGrid;