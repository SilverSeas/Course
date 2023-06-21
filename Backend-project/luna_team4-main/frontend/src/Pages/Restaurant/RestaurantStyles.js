import styled from 'styled-components';
import colorimg from '../../Assets/solid-color-image-dark-grey.jpeg'

export const HeaderContainer = styled.div`
  height: 500px;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 22px;
  background-color: #F2F2F2;
  padding: 25px;
`

export const FilterBar = styled.div`
  width: 650px;
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;

  input{
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 400;

    :placeholder{
      padding: 11px;
    }
  }
`

export const NoReviewsText = styled.div`
  font-weight: 300px;
  font-size: 20px;
`

export const Separator = styled.div`
  height: 1px;
  background-color: #D8D8D8;
  margin: 15px 0;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 75px;
  margin: 30px 17px;
`

export const ButtonWraper = styled.div`
  width: 200px;
`

export const ButtonWraperSmall = styled.div`
  width: 120px;
`