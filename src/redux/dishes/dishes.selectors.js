import {createSelector} from 'reselect';

const selectDishes = state => state.dishes;

export const selectDishesList = createSelector(
  [selectDishes],
  dishes => dishes.dishesList
);

export const selectDish = dishTitle => createSelector(
  [selectDishesList],
  dishesList => dishesList.find(dish => 
    dish.title.split(' ').join('').toLowerCase() === dishTitle
  )
);

export const selectIsFetchingDishes = createSelector(
  [selectDishes],
  dishes => dishes.isFetchingDishes
);