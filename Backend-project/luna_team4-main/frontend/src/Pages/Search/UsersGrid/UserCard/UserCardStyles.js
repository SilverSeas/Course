import styled from "styled-components";

export const Card = styled.div`
  width: 270px;
  border-radius: 3px;
  border-top: 8px solid #E47D31;
  background-color: #FFFFFF;
  height: 200px;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #EBEBEB;
`

export const UserAvatar = styled.div`
  width: 65px;
  height: 65px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const UserInfo = styled.div`
  padding: 10px;
`

export const TextOrangeBig = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #E47D31; 
  margin-bottom: 8px;
`

export const CardBody = styled.div`
  padding: 14px 11px 22px 11px;
`

export const TextOrangeSmall = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #E47D31; 
`

export const TextGreyBold = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #4C4C4C;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  color: #FFFFFF;
  background-color: rgba(145, 145, 145, 0.6);
  margin: 8px 0 17px 0;
  font-size: 16px;
  font-weight: 300;
`

export const LikeButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-right: 1px solid #FFFFFF;
  padding: 13px;
  gap: 11px;
`

export const CommentButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px;
  gap: 11px;
`

export const LatestComments = styled.p`
  font-size: 20px;
  font-weight: 300px;
  margin-bottom: 11px;
`

export const Comment = styled.p`
  font-size: 14px;
  font-weight: 300px;
  margin: 3px 0 16px 0;
`
