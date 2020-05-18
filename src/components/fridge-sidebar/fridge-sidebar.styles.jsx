import styled from 'styled-components';

const getFontSize = ({item}) => {
  if (item.length <= 14) {
    return `1em`;
  } else {
    return `${14 / item.length}em`;
  }
};

const getFridgeHeight = () => {
  return `${window.innerHeight - 120}px`;
}

export const Sidebar = styled.div`
  grid-row: 2/4;
  border-right: solid 3px #555555;
  border-radius: 5px;
  background-color: #fcfcfc;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 21px;
  font-weight: 500;
  border-top: 2px solid #555555;
  border-bottom: 1px solid #555555;
  border-radius: 5px;
`;

export const FridgeItems = styled.div`
  border-top: 2px solid #555555;
  border-radius: 5px;
  padding: 16px 20px;
  text-align: center;
  height: ${getFridgeHeight};
  overflow-y: auto;
  overflow-x: hidden;
  
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track-piece {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: #999999;
    border-radius: 5px;
  }​
`;

export const FridgeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 35px;
  border: 1px solid #333333;
  border-radius: 3px;
  margin: 5px 0;
  padding: 3px 10px;
  background-color: #f3f3f3;
  font-size: ${getFontSize};
`;

export const DeleteButton = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-left: 2px;
  color: #444444;
  cursor: pointer;
`;