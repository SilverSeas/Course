import styled from 'styled-components';

export const CategoryUL = styled.ul`
  position: absolute;
  right:6vw;
  top: 13vh;
  color: black;
  background: white;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #D8D8D8;
`
export const CategoryLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid #D8D8D8;
  color: #4C4C4C;
    &:hover{
      background: #D8D8D8;
    }
  
`