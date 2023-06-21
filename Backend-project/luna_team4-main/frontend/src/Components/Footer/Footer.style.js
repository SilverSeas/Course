import styled from "styled-components";

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #D8D8D8;
  color: #646363;
`

export const FooterUpperDiv = styled.div`
  display: flex;
  border-bottom: 1px solid #D8D8D8;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7vh;
`

export const FooterLowDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 2%;
  height: 3vh;
`

export const FooterDisclaimerDiv = styled.div`
  display: flex;
  align-items: center;
`

export const FooterLeftDiv = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
`

export const FooterRightDiv = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  padding-right: 2%;
`

export const FooterImagesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  
`

export const FooterLogoImg = styled.img`
  width: 40px;
  height: 40px;
`
