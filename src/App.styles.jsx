import styled from 'styled-components';

export const App = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 56px 1fr;
  height: 100vh;
`;

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: scroll;
  min-width: 550px;
`;