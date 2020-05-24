import styled from 'styled-components';

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

export const Welcome = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.9rem;
  margin-bottom: 16px;
`;

export const NavButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin: 15px 0;
  padding: 0 15px 0 0;
`;

export const ButtonLabel = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 12px;
`;

export const NavButton = styled.div`
  width: 190px;
  text-align: center;
  font-size: 13px;
  padding: 10px 0;
  border: solid 1px black;
  border-radius: 5px;
  background-color: #E4FDFF;
  cursor: pointer;

  &:hover {
    font-weight: 600;
    border: 2px solid #0029AC;
    padding: 9px;
  }
`;