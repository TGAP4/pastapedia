import React from 'react';
import * as S from './async-dish-list.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsFetchingDishes} from '../../redux/dishes/dishes.selectors';

import DishPreviewCard from '../dish-preview-card/dish-preview-card';
import LoadingSpinner from '../loading-spinner/loading-spinner';


const AsyncDishList = ({dishList, displayImages, isFetchingDishes}) => {
  return (
      isFetchingDishes ?
      <LoadingSpinner /> :
      <S.DishList>
        {dishList.map((dish, i) =>
          <DishPreviewCard 
            key={i}
            title={dish.title}
            imageUrl={displayImages ? dish.imageUrl : null}
            description={dish.description}
          />
        )}
      </S.DishList>
  );
}

const mapState = createStructuredSelector({
  isFetchingDishes: selectIsFetchingDishes 
});

export default connect(mapState)(AsyncDishList);