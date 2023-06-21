import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  left: 362px;
  margin-top: 150px;
  margin-left: 300px;
  font-weight: 700;
  border: 1px solid #EBEBEB ;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: 700;
  background: white;
  color: #303030;
`;
export const ReviewsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background: white;
  width: 600px;
  height: 100px;
  border: 1px solid #EBEBEB;
`

export const ReviewsTitleDiv = styled.div`
  font-weight: 400;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #4C4C4C;
`;

export const ReviewsDescriptionDiv = styled.div`
  font-weight: 300;
  font-size: 16px;
  color: #303030;
`

export const ReviewsTitleDateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: 95%;
  padding-top: 20px;
`
export const ReviewsDateP = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: #303030;
`