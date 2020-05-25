import styled from 'styled-components';

const getFontSize = ({children}) => {
  if (children.length <= 14) {
    return `15px`;
  } else {
    return `${236 / children.length}px`;
  }
};

export const FridgeBuilderPage = styled.div`
  width: 100%;
  padding: 20px 80px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
`;

export const IngredientsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  align-items: center;
  justify-items: center;
  grid-gap: 2px 15px;
  margin: 20px 0;
`;

export const IngredientIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  margin: 8px;
  border: 2px solid #1B3279;
  border-radius: 5px;
  background-color: #E4FDFF;
  font-size: ${getFontSize};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    width: 152px;
    height: 42px;
    margin: 7px;
    border: 3px solid #0029AC;
  }
`;


