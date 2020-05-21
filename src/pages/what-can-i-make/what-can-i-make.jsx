import React from 'react';
import * as S from './what-can-i-make.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDishesList} from '../../redux/dishes/dishes.selectors';
import {selectFridgeItems} from '../../redux/fridge/fridge.selectors';

import {ableToMakeNow, oneIngredientNeeded} from '../../utils/utils';

import AsyncDishList from '../../components/async-dish-list/async-dish-list';


const WhatCanIMake = ({fullDishesList, fridgeItems}) => {
  return (
    <S.WhatCanIMakePage>
      <S.Title>What Can I Make?</S.Title>
      <S.Description>
        With the ingredients that you already have (assuming you also 
        pasta of some shape or size), here are some delicious, traditional 
        pasta dishes you can make or make with one additional ingredient!
      </S.Description>
      <S.DishLists>
        <S.List>
          <S.ListTitle>Able To Make Now</S.ListTitle>
          <AsyncDishList 
            dishList={ableToMakeNow(fridgeItems, fullDishesList)}
            displayImages={false}
          />
        </S.List>
        <S.List>
          <S.ListTitle>One More Ingredient</S.ListTitle>
          <AsyncDishList 
            dishList={oneIngredientNeeded(fridgeItems, fullDishesList)}
            displayImages={false}
          />
        </S.List>
      </S.DishLists>
    </S.WhatCanIMakePage>
  );
}

const mapState = createStructuredSelector({
  fullDishesList: selectDishesList,
  fridgeItems: selectFridgeItems
});

export default connect(mapState)(WhatCanIMake);