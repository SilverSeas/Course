import React, {useEffect, useState} from "react";
import {
    Container,
    ReviewsTitleDateDiv,
    Title,
} from './ReviewStyles';
import ReviewComponent from "./ReviewComponent";
import lunaAPI from "../../../Axios/lunaApi";
import Review from "./ReviewComponent/index";
import styled from "styled-components";
import {useSelector} from "react-redux";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; 
`

const ReviewsList = ({ userID }) => {
  const [reviewsList, setReviewsList] = useState([])

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return;
    }

    const getReviewsFromUserByID = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await lunaAPI.get(`reviews/user/${userID}/`, config);
        setReviewsList(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    getReviewsFromUserByID().then(() => {
      console.log('Reviews fetched successfully');
    }).catch((error) => {
      console.log('Error fetching reviews:', error);
    });

  }, [userID]);
  return (
    <List>
      {
        reviewsList.map(review => {
          return <Review key={review.id} review={review} />
        })
      }
    </List>
  );
}

const Reviews = () => {
  const currentUser = useSelector(store => store.user.userData);

  return (
    <Container>
        <ReviewsTitleDateDiv>
            <Title>Reviews</Title>
        </ReviewsTitleDateDiv>
      <div>
         <ReviewsList userID={currentUser.id} />
      </div>
    </Container>
  );
};

export default Reviews;
