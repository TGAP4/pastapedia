import React from 'react';
import * as S from './what-can-i-make.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDishesList} from '../../redux/dishes/dishes.selectors';
import {selectFridgeItems} from '../../redux/fridge/fridge.selectors';

import {ableToMakeNow, oneIngredientNeeded} from '../../utils/utils';

import AsyncDishList from '../../components/async-dish-list/async-dish-list';


const WhatCanIMake = ({fullDishesList, fridgeItems}) => {
  const filteredDishList = filteringFunction => {
    return (
      filteringFunction(fridgeItems, fullDishesList).length ?
      <AsyncDishList 
        dishList={filteringFunction(fridgeItems, fullDishesList)}
        displayImages={false}
      /> :
      'Add more ingredients to your fridge to be able to make more dishes!'
    );
  }

  return (
    <S.WhatCanIMakePage>
      <S.Title>What Can I Make?</S.Title>
      <S.Description>
        With the ingredients that you already have (in addition to pasta 
        of some shape or size), here are some delicious, traditional 
        pasta dishes you can make now or with one additional ingredient!
      </S.Description>
      <S.DishLists>
        <S.List>
          <S.ListTitle>Able To Make Now</S.ListTitle>
          {filteredDishList(ableToMakeNow)}
        </S.List>
        <S.List>
          <S.ListTitle>One More Ingredient</S.ListTitle>
          {filteredDishList(oneIngredientNeeded)}
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