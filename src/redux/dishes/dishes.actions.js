import Types from './dishes.types';

export const fetchDishesStart = () => ({
  type: Types.FETCH_DISHES_START
});

export const fetchDishesSuccess = dishesList => ({
  type: Types.FETCH_DISHES_SUCCESS,
  payload: dishesList
});

export const fetchDishesFailure = error => ({
  type: Types.FETCH_DISHES_FAILURE,
  payload: error
});