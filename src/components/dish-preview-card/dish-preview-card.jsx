import React from 'react';
import * as S from './dish-preview-card.styles';

import {Link} from 'react-router-dom';


const DishPreviewCard = ({title, imageUrl, description}) => {
  return (
    <S.DishPreviewCard 
      as={Link} 
      to={`/dishes/${title.split(' ').join('').toLowerCase()}`}
    >
      {imageUrl ? <S.Thumbnail src={imageUrl} alt='Dish Thumbnail' /> : null}
      <div>
        <S.Title>{title}</S.Title>
        <S.Description>{description || 'DESCRIPTION'}</S.Description>
      </div>
    </S.DishPreviewCard>
  );
}

export default DishPreviewCard;