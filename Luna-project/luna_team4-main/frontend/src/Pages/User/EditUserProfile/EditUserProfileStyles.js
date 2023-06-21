import React, { useState } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 1200px;
  width: 50%;
  left: 362px;
  margin-top: 150px;
  margin-left: 300px;
  background: #FFFFFF;

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
  width: 80%;
  margin-left: 20px;
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: left;
  color: #979797;

;
`;

export const Input = styled.input`
  height: 52px;
  width: 324px;
  left: 0px;
  top: 0px;
  border-radius: 3px;
  background: linear-gradient(0deg, #EBEBEB, #EBEBEB),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
  border: 1px solid #EBEBEB;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: #303030;
  padding: 0 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  align-self: stretch;
`;

export const TextArea = styled.textarea`
  height: 200px;
  width: 324px;
  left: 0px;
  top: 0px;
  border-radius: 3px;
  background: linear-gradient(0deg, #EBEBEB, #EBEBEB),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
  border: 1px solid #EBEBEB;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: #303030;fr
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  outline: none;
  resize: vertical;
  align-self: stretch;
`;
export const EditTitle = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;
  margin-bottom: 10px;
  line-height: 100%;
  letter-spacing: 0px;
  margin-left: 20px ;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const SaveButton = styled.div`
  width: 200px;
  height: 56px;
`;
