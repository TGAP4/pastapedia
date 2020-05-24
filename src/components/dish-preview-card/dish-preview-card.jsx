import React from 'react';
import * as S from './dish-preview-card.styles';

import {Link} from 'react-router-dom';


const DishPreviewCard = ({title, imageUrl, description}) => {
  const descriptionPreview = 
    description.length >= 200 && window.innerWidth <= 850 ? 
    description.substr(0, 197) + '...' : 
    description;

  return (
    <S.DishPreviewCard 
      as={Link} 
      to={`/dishes/${title.split(' ').join('').toLowerCase()}`}
    >
      {imageUrl ? <S.Thumbnail src={imageUrl} alt='Dish Thumbnail' /> : null}
      <div>
        <S.Title>{title}</S.Title>
        <S.Description>{descriptionPreview}</S.Description>
      </div>
    </S.DishPreviewCard>
  );
}

export default DishPreviewCard;