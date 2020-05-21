import styled from 'styled-components';

export const WhatCanIMakePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
`;

export const Description = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

export const DishLists = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 35vw;
  margin: 10px 14px;
`;

export const ListTitle = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
`;
