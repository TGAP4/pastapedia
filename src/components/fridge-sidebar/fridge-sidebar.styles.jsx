import styled from 'styled-components';

export const Sidebar = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-rows: 60px 1fr;
  border-right: solid 1px #555555;
  background-color: #fcfcfc;
  grid-row: 2/3;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  font-weight: 500;
  border: 2px solid #555555;
  border-radius: 5px;
`;

export const FridgeItems = styled.div`
  border: 2px solid #555555;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;