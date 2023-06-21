import LikeCommentButtons from "../../../../Components/LikeCommentButtons/LikeCommentButtons";
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import ReviewUser from "../../../../Components/UserCardHeader/UserCardHeader";
import { ButtonWraperSmall, DateContainer, AddCommentWraper, HeaderRight, ReviewContainer, ReviewHeader, ReviewContent, CommentList, ShowHideCommentBtn, ReviewFooter } from "./ReviewStyles";
import Button from '../../../../Components/Button'
import Comment from "./Comment/Comment";
import { useState } from "react";
import { formatDate } from "../../../../helpers";
import lunaAPI from "../../../../Axios/lunaApi";

const Review = ({ review, onNewComment }) => {
  const [areAllCommentsShown, setAreAllCommentsShown] = useState(false);
  const [commentInput, setCommentInput] = useState('');

  const handleShowHideCommentsClick = () => {
    setAreAllCommentsShown(prev => !prev);
  }

  const commentClick = () => {
    setAreAllCommentsShown(true)
  }

  const handleCommentChange = (e) => {
    e.preventDefault();
    setCommentInput(e.target.value)
  }

  const handlePostClick = (e) => {
    e.preventDefault();
    postComment();
  }

  //------------ CREATE A NEW COMMENT IN A REVIEW ---------------
  const postComment = async () => {
    if (!localStorage.getItem('token') || commentInput === '') {
      return;
    }
    try {
      const data = {
        text_content: commentInput
      }
      setCommentInput('');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      };

      await lunaAPI.post(`comment/reviews/comments/new/${review.id}/`, data, config);
      onNewComment();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ReviewContainer>
      <ReviewHeader>
        <HeaderRight>
          <ReviewUser
            avatar={review?.reviewed_by_user.profile_image}
            userName={review?.reviewed_by_user.username}
            userID={review?.reviewed_by_user.id}
          />
          <RatingStars rating={review.rating} />
        </HeaderRight>
        <DateContainer>
          <p>{formatDate(review?.date_created)}</p>
        </DateContainer>
      </ReviewHeader>
      <div>
        <div>
          <ReviewContent>{review?.text_content}</ReviewContent>
          {
            areAllCommentsShown ?
              <div>
                <ReviewFooter>
                  <AddCommentWraper>
                    <input placeholder='Add a comment...' onChange={handleCommentChange} value={commentInput}></input>
                    <ButtonWraperSmall>
                      <Button textInput={'POST'} onClickAction={handlePostClick} />
                    </ButtonWraperSmall>
                  </AddCommentWraper>
                  <ShowHideCommentBtn onClick={handleShowHideCommentsClick}>Hide</ShowHideCommentBtn>
                </ReviewFooter>
                <CommentList>
                  {
                    review?.comments.length !== 0 ?
                      review.comments.map(comment => {
                        return <Comment key={comment.id} comment={comment} />
                      })
                      :
                      <p>No comments</p>
                  }
                </CommentList>
              </div>
              :
              <div>
                <ReviewFooter>
                  <LikeCommentButtons likesCount={review?.likes_on_review} commentClick={commentClick} />
                  <ShowHideCommentBtn onClick={handleShowHideCommentsClick}>View all comments</ShowHideCommentBtn>
                </ReviewFooter>
              </div>
          }
        </div>
      </div>
    </ReviewContainer>
  );
}

export default Review;