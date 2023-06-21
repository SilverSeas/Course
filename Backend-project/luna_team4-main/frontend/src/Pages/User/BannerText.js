import styled from 'styled-components';


const BannerTextWrapper = styled.div`
  position: absolute;
  height: 100px;
  width: 30%;
  left: 300px; 
  top: 15%;
  z-index: 5;
  color: white;

  div.name {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 10px;
    line-height: 100%;
    color: white;
  }
`;

const BannerText = ({ firstName, lastName, location }) => {
  const initial = lastName ? lastName.charAt(0) + '.' : '';
  const name = `${firstName} ${initial}`;

  return (
    <BannerTextWrapper>
      <div className="name">{name}</div>
      <div>{location}</div>
      <div>{'3 reviews'}</div>
      <div>{'7 comments'}</div>
    </BannerTextWrapper>
  );
};

export default BannerText;
