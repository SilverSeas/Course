import styled from "styled-components";
import colorimg from '../../Assets/solid-color-image-dark-grey.jpeg'

export const HeaderContainer = styled.div`
  background-image: url(${props => props.img ? props.img : colorimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #FFFFFF;
  position: relative;
`

export const TitleContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 33px 0 58px 130px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
`

export const Category = styled.p`
  font-size: 24px;
  font-weight: 300;
`

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 31px;

  p{
    font-size: 20px;
    font-weight: 300;
  }
`

export const ContactContainer = styled.div`
  width: 360px;
  height: 335px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  right: 130px;
  top: 30px;
`

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 25px 0 5px;
`

export const IconTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding-left: 20px;

  img{
    width: 18px;
  }

  p{
    font-size: 20px;
    color: #4C4C4C;
  }
`

export const BodyContainer = styled.div`
  width: 832px;
  margin: auto;
  padding: 60px;
  display: flex;
  flex-direction: column;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 230px;
  margin-top: 23px;
  margin-bottom: 30px; 
  white-space: pre-line;
  word-wrap: break-word;
  font-weight: 400;
  font-size: 20px;
  padding: 20px;
  font-family: inherit;

  ::placeholder{
    color: #BBB7B7;
    font-weight: 400;
    font-size: 20px;
  }
`

export const ButtonWraper = styled.div`
  width: 200px;
  align-self: flex-end;
`
