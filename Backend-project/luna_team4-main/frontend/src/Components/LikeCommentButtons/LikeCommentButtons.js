import { FaRegThumbsUp } from 'react-icons/fa';
import { Buttons, CommentButton, LikeButton } from './LikeCommentButtonsStyles';
import lunaAPI from "../../Axios/lunaApi";
import { useEffect, useState } from "react";


const LikeCommentButtons = ({ likesCount, commentsCount, idReview, likedByLoginUser }) => {

  const [likesSumRest, setLikesSumRest] = useState(likesCount)
  const [likedByUser, setlikedByUser] = useState(likedByLoginUser)

  const handleClickLike = (e) => {
    e.preventDefault()
    addSubLike()
    updateLike()
  }

  const addSubLike = () => {
    if (likedByUser) {
      setLikesSumRest(likesSumRest - 1)
    } else {
      setLikesSumRest(likesSumRest + 1)
    }
    setlikedByUser(!likedByUser)
  }

  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }
  const bodyParameters = {
    key: "value"
  };

  const updateLike = async () => {
    let response = await lunaAPI.post(`/reviews/like/${idReview}/`, bodyParameters, config)
    try {
    } catch (error) {
      console.log(error)
      alert('Please sign in in order to Like a review')
    }
  }

  return (
    <Buttons>
      <LikeButton>
        <FaRegThumbsUp></FaRegThumbsUp>
        <p>Like</p>
        <p>{likesSumRest}</p>
      </LikeButton>
      <CommentButton>
        <p>Comment</p>
        <p>24</p>
      </CommentButton>
    </Buttons>
  );
}

export default LikeCommentButtons;