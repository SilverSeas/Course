import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #D8D8D8;
  font-size: 20px;
  font-weight: 700;
  border: 1px solid #D8D8D8;
  background-color: white;
`
export const SearchBar = styled.div`
  width: 77%;
  border-right: 1px solid #D8D8D8;
  padding: 12px 32px;
  height: 2vh;

  input{
    width: 100%;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: 700;

    ::placeholder{
      color: #D8D8D8;
    }
  }
`

export const SearchCategory = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img{
    margin-left: 25px;
  }
`

export const Main = styled.div`
  background-color: #F2F2F2;
  padding: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 72vh;
`

export const MainMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  border-bottom: 1px solid #D8D8D8;
`

export const Tab = styled(NavLink)`
  width: 200px;
  padding: 12px;
  color: #4C4C4C;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  &.active{
    border-bottom: 3px solid #E47D31;
  }
`

export const Grid = styled.div`
  padding: 60px 150px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 29px;
`
