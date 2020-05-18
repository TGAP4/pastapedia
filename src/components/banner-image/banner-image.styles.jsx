import styled from 'styled-components';

export const BannerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-image: url('https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png');
  box-shadow: 0 0 5px gray;
  padding: 8px 0 0;
  z-index: 1;
  grid-column: 1/3;
`;

export const Title = styled.div`
  font-size: 35px;
  font-family: 'Hoefler Text';
`;

export const MiddleLetters = styled.span`
  font-size: 25px;
`;