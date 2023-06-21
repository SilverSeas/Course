import styled from "styled-components";

export const Card = styled.div`
  width: 270px;
  border-radius: 3px;
  border-top: 8px solid #E47D31;
  background-color: #FFFFFF;
  height: 410px;
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
  padding: 15px 10px 0 10px;
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

export const ReviewTextDiv = styled.div`
  height: 110px;
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
