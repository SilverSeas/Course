import { useEffect, useState } from "react";
import { CardHeader, TextGreyBold, TextOrangeBig, UserAvatar, UserInfo } from "./UserCardHeaderStyles";
import lunaAPI from "../../Axios/lunaApi";

const ReviewUser = ({ avatar, userName, userID }) => {
  const [reviewsCountByUser, setReviewsCountByUser] = useState();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return;
    }

    const getRestaurantByID = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await lunaAPI.get(`reviews/user/${userID}/`, config);
        setReviewsCountByUser(response.data.length)
      } catch (error) {
        console.log(error);
      }
    }
    getRestaurantByID();
  }, []);


  return (
    <CardHeader>
      <UserAvatar>
        <img src={avatar}></img>
      </UserAvatar>
      <UserInfo>
        <TextOrangeBig>{userName}</TextOrangeBig>
        <TextGreyBold> {reviewsCountByUser} Reviews in total</TextGreyBold>
      </UserInfo>
    </CardHeader>
  );
}

export default ReviewUser;
