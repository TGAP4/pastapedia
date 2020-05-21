import styled from 'styled-components';

export const DishProfile = styled.div`
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
  // display: flex;
  margin-top: 20px;
  font-size: 18px;
  width: 100%;
`;

export const DishPicture = styled.img`
  height: 150px;
  width: 200px;
  float: left;
  margin-right: 25px;
`;

export const DishInfo = styled.div`
  width: 100%;
  margin-top: 10px;

  div {
    margin: 10px 0;
  }

  span {
    font-weight: 600;
  }
`;

export const Link = styled.a`
  &:hover {
    color: #0000B1;
  }
`;