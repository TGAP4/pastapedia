import React from 'react';
import * as S from './fridge-builder.styles';
import IngredientsList from './ingredients-list';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectFridgeItems} from '../../redux/fridge/fridge.selectors';
import {addItem} from '../../redux/fridge/fridge.actions';


const FridgeBuilder = ({fridgeItems, addItem}) => {
  return (
    <>
      <S.Title>What Ingredients Do You Have Available?</S.Title>
      <S.IngredientsList>
        {IngredientsList.map(ingredient => 
          <S.IngredientIcon>{ingredient}</S.IngredientIcon>
        )}
      </S.IngredientsList>
    </>
  );
}

const mapState = createStructuredSelector({
  fridgeItems: selectFridgeItems
});

const mapDispatch = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(mapState, mapDispatch)(FridgeBuilder);