import {Comment, TextOrangeSmall} from "../ReviewCardStyles";

const CommentReview = ({commentText,user}) => {

    return (
        <div>
            <TextOrangeSmall>{user.username}</TextOrangeSmall>
            <Comment>{commentText}</Comment>
        </div>
    )


}

export default CommentReview