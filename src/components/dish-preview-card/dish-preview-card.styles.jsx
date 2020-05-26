import styled from 'styled-components';

const getImageUrl = ({imageUrl}) => {
  return imageUrl ? '110px' : '';
}

export const DishPreviewCard = styled.div`
  display: flex;
  width: 100%;
  height: ${getImageUrl};
  margin-bottom: 17px;
  padding-right: 10px;
  pointer-events: none;

  &:hover {
    color: #0000B1;
  }
`;

export const Thumbnail = styled.img`
  width: 150px;
  height: auto;
  padding: 5px;
  margin-right: 15px;
  cursor: pointer;
  pointer-events: auto;
`;

export const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  margin: 0;
  pointer-events: auto;
`;

export const Description = styled.div`
  font-size: 11px;
  cursor: pointer;
  pointer-events: auto;
`;

