import React, { useEffect, useState } from "react";
import CommentComponent from "./Comment Component";
import { useSelector } from "react-redux";
import lunaAPI from "../../../Axios/lunaApi";
import { Container, Title, CommentsTitleDateDiv } from "./CommentsStyles";
const CommentsList = ({ userID }) => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return;
    }

    const getCommentsFromUserByID = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await lunaAPI.get(`/comment/reviews/comments/1/`, config);
        setCommentsList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCommentsFromUserByID().then(() => {
      console.log('Comments fetched successfully');
    }).catch((error) => {
      console.log('Error fetching comments:', error);
    });

  }, [userID]);

  return (
    <div>
      {Array.isArray(commentsList) &&
        commentsList?.map((comment, index) => (
          <CommentComponent key={comment.id} comment={comment} index={index} />
        ))}

    </div>
  );
};

const UserComments = () => {
  const currentUser = useSelector((store) => store.user.userData);

  return (
    <Container>
      <CommentsTitleDateDiv>
        <Title>Comments</Title>
      </CommentsTitleDateDiv>
      <CommentsList userID={currentUser.id} />
    </Container>
  );
};
export default UserComments;

