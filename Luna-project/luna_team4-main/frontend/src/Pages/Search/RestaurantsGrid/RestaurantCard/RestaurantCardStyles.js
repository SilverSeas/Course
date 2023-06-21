import styled from "styled-components";

export const Card = styled.div`
  width: 270px;
  border-radius: 3px;
  border-top: 8px solid #E47D31;
  background-color: #FFFFFF;
  height: 410px;
  p {
    color: #4C4C4C;
  }
`

export const Details = styled.div`
  padding: 20px 15px;
`

export const RestName = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 6px;
`

export const RestAddress = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 12px;
`

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
`

export const ReviewCount = styled.p`
  font-size: 20px;
  font-weight: 300;
`

export const RestaurantImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const RestaurantImageContainer = styled.div`
  height: 288px;
`

