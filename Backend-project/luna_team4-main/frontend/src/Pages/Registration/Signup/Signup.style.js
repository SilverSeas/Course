import styled from "styled-components";

export const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 82vh;
  justify-content: flex-start;
  background: #F2F2F2;
  
`

export const RegistrationContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;
  gap: 50px;
  width: 100%;
`
export const InputSignInStyle = styled.input`
  width: 340px;
  height: 50px;
  border-radius: 3px;
  border: 1px solid #EBEBEB;
  background: white;
  font-weight: 700;
  font-size: 20px;
  color: #979797;
  line-height: 23px;
  padding-left: 30px;
  ::placeholder {
       color: #979797;
   }
`
export const ButtonRegistrationDiv = styled.div`
  height: 50px;
  width: 200px;
`

export const ErrorP = styled.p`
  color : red;
  padding-bottom: 10px;
`
