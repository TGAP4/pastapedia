import styled from 'styled-components';

export const FullListPage = styled.div`
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
  margin: 15px 0;
  font-size: 18px;
`;

export const Filters = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr 1fr;
  padding: 0 50px;
  align-items: center;
  width: 100%;
  margin: 8px 0 30px;
`;

export const SearchBar = styled.input`
  width: 220px;
  font-size: 11px;
  padding: 5px 7px;
  border-radius: 3px;
  border: 0;
  box-shadow: 0 0 2px #555555;
  
  &::placeholder {
    color: #555555;
  }
`;

export const Dropdown = styled.select`
  width: 170px;
  height: 22px;
  // box-shadow: 0 0 2px gray;
`;