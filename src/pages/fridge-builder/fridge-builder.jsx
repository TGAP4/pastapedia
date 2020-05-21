import React from 'react';
import * as S from './fridge-builder.styles';
import IngredientsList from './ingredients-list';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectFridgeItems} from '../../redux/fridge/fridge.selectors';
import {addItem} from '../../redux/fridge/fridge.actions';


const FridgeBuilder = ({fridgeItems, addItem}) => {
  const displayedIngredients = IngredientsList.filter(ingredient => 
    fridgeItems.indexOf(ingredient) === -1
  ).sort();

  return (
    <S.FridgeBuilderPage>
      <S.Title>What Ingredients Do You Have Available?</S.Title>
      <S.IngredientsList>
        {displayedIngredients.map((ingredient, i) => 
          <S.IngredientIcon key={i} onClick={() => addItem(ingredient)}>
            {ingredient}
          </S.IngredientIcon>
        )}
      </S.IngredientsList>
    </S.FridgeBuilderPage>
  );
}

const mapState = createStructuredSelector({
  fridgeItems: selectFridgeItems
});

const mapDispatch = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(mapState, mapDispatch)(FridgeBuilder);