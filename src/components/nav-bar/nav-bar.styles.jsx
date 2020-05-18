import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 18px 20px;
`;

export const NavButton = styled.div`
  cursor: pointer;
  font-weight: 500;
  font-family: BlinkMacSystemFont;
  color: #222222;

  &:hover {
    color: #bbbbbb;
  }
`;