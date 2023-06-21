import styled from "styled-components";

const Star = ({ filled, onClick }) => {
  const filledColor = filled ? '#F8E71C' : '#EBEBEB';

  return (
    <div onClick={onClick}>
      <svg width="27px" height="27px" viewBox="0 0 36 35" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs></defs>
        <g id="Symbols" stroke="none" strokeWidth="1" fill={filledColor} fillRule="evenodd">
          <g id="Profile-nav" transform="translate(-11.000000, -4.000000)" fill={filledColor} stroke="none" strokeWidth="2">
            <g id="Group-2" transform="translate(0.000000, -1.000000)">
              <polygon id="Star" points="29 32.8753882 19.595436 38 21.3915479 27.145898 13.7830957 19.4589803 24.297718 17.8753882 29 8 33.702282 17.8753882 44.2169043 19.4589803 36.6084521 27.145898 38.404564 38"></polygon>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Star;