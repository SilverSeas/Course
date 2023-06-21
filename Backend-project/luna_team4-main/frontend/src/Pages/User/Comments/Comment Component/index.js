import React from 'react';
import {
  CommentsDateP,
  CommentsDescriptionDiv,
  CommentsDiv,
  CommentsTitleDiv,
} from '../CommentsStyles'

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
const CommentComponent = ({ comment, index }) => {
  return (
    <CommentsDiv>
      <CommentsTitleDiv>
        <p>Review {index + 1}</p>
        <CommentsDateP>{formatDate(comment?.created_date)}</CommentsDateP>
      </CommentsTitleDiv>
      <CommentsDescriptionDiv>
        <p>{comment?.text_content}</p>
      </CommentsDescriptionDiv>
    </CommentsDiv>
  );
};

export default CommentComponent;
