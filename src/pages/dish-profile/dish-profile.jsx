import React from 'react';
import * as S from './dish-profile.styles';

import {connect} from 'react-redux';
import {selectDish} from '../../redux/dishes/dishes.selectors';
import {selectFridgeItems} from '../../redux/fridge/fridge.selectors';


const DishProfile = ({dish, fridgeItems}) => {
  const {title, pastaType, imageUrl, ingredients, recipe, wikiLink, description} = dish;

  const ownedIngredients = ingredients.filter(
    ingredient => fridgeItems.find(item => item === ingredient)
  );
  const missingIngredients = ingredients.filter(
    ingredient => !fridgeItems.find(item => item === ingredient)
  );

  return (
    <S.DishProfile>
      <S.Title>{title}</S.Title>
      <S.Description>
        <S.DishPicture src={imageUrl} alt='Dish Picture' />
        {description}
      </S.Description>
      <S.DishInfo>
        <div>
          <S.Label>Suggested Type of Pasta:  </S.Label>
          {pastaType}
        </div>
        <div>
          <S.Label>Ingredients:  </S.Label>
          {ownedIngredients.join(', ')}
          {ownedIngredients.length && missingIngredients.length ? ', ' : null}
          <S.MissingIngredients>{missingIngredients.join(', ')}</S.MissingIngredients>
        </div>
        <div>
          <S.Label>Summarized Recipe:  </S.Label>
          {recipe}
        </div>
        <div>
          <S.Label>Wikipedia Page:  </S.Label>
          <S.Link href={wikiLink} target='_blank'>{wikiLink}</S.Link>
        </div>
      </S.DishInfo>
    </S.DishProfile>
  );
}

const mapState = (state, ownProps) => ({
  dish: selectDish(ownProps.match.params.dishTitle)(state),
  fridgeItems: selectFridgeItems(state)
});

export default connect(mapState)(DishProfile);