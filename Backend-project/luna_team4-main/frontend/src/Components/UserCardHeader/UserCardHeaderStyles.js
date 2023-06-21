import styled from "styled-components"

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #EBEBEB;
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

export const TextGreyBold = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #4C4C4C;
`

