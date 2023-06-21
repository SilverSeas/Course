import styled from "styled-components"

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  color: #FFFFFF;
  background-color: rgba(145, 145, 145, 0.6);
  margin: 10px 0 17px 0;
  font-size: 16px;
  font-weight: 400;
  width: 249px;
`

export const LikeButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-right: 1px solid #FFFFFF;
  padding: 13px;
  gap: 11px;

  :hover{
    cursor: pointer;
    color: grey;
  }
`

export const CommentButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px;
  gap: 11px;

  :hover{
    cursor: pointer;
    color: grey;
  }
`