import React from 'react';
import * as S from './makeable-dishes.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsFetchingDishes} from '../../redux/dishes/dishes.selectors';



const DishList = ({title, isFetchingDishes}) => {
  if (isFetchingDishes) return null;

  return (
    <S.DishList>
      <S.ListTitle>{title}</S.ListTitle>
      <div>DISHES LIST</div>
    </S.DishList>
  );
}

const mapState = createStructuredSelector({
  isFetchingDishes: selectIsFetchingDishes 
});

export default connect(mapState)(DishList);