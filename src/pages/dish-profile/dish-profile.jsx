import React from 'react';
import * as S from './dish-profile.styles';

import {connect} from 'react-redux';
import {selectDish} from '../../redux/dishes/dishes.selectors';


const DishProfile = ({dish}) => {
  const {title, pastaType, imageUrl, ingredients, recipe, wikiLink} = dish;

  return (
    <S.DishProfile>
      <S.Title>{title}</S.Title>
      <S.Description>
        <S.DishPicture src={imageUrl} alt='Dish Picture' />
        {recipe}
      </S.Description>
      <S.DishInfo>
        <div>
          <span>Suggested Type of Pasta:  </span>
          {pastaType}
        </div>
        <div>
          <span>Ingredients:  </span>
          {ingredients.join(', ')}
        </div>
        <div>
          <span>Summarized Recipe:  </span>
          {recipe}
        </div>
        <div>
          <span>Wikipedia Page:  </span>
          <S.Link href={wikiLink} target='_blank'>{wikiLink}</S.Link>
        </div>
      </S.DishInfo>
    </S.DishProfile>
  );
}

const mapState = (state, ownProps) => ({
  dish: selectDish(ownProps.match.params.dishTitle)(state)
});

export default connect(mapState)(DishProfile);