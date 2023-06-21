import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F8F8F8;
  height:1200px;
`;

export const ProfilePicture = styled.div`
  background-color: orange;
  position: absolute;
  height: 200px;
  width: 200px;
  left: 100px;
  top: 13%;
  z-index: 5;
  background-image: url(${props => props.image });
  background-size: cover;
  background-position: center;
  &:hover {
    opacity: 0.8;
  }
    & input[type="file"] {

  }
`;
export const ProfileNav = styled.div`
  position: absolute;
  height: 500px;
  width: 200px;
  left: 100px;
  top: 35%;
  z-index: 5;
`;

export const Background = styled.div`
  background-color: darkgrey;
  height: 15%;
  width: 100%;
  position: absolute;
  cursor: pointer;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  &:hover {
    opacity: 0.8;
  }

  & input[type="file"] {

  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00000060;
  }
`;

export const About = styled.div`
  align-self: flex-end;
  justify-content: flex-end;
  background-color: #F8F8F8;
  height:1000px;
  width: 20%;
  padding: 20px;
  position: absolute;
  margin-top: 150px;
 line-height: 35px;
`;

export const ProfileNavButtons = styled.div`
  display: flex;
  flex-direction: column;
  top: 200px;

  button {
    display: flex;
    align-items: center;
    height: 45px;
    width: 200px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    text-align: left;
    background-color: #FFFFFF;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    padding-left: 20px;
  
    svg {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
  
    &:hover {
      opacity: 0.8;
    }
  
     &:focus {
          outline: none;
          background-color: ${({ activeView, view }) => activeView === view ? '#00000015' : '#FFFFFF'};
          border-left: ${({ activeView, view }) => activeView === view ? '5px solid orange' : 'none'};
        }
      }
`;

export const AboutTitle = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;
`;