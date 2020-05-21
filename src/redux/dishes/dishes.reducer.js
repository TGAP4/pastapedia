import Types from './dishes.types';

const INITIAL_STATE = {
  dishesList: [],
  isFetchingDishes: true,
  error: undefined
};

const dishesReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_DISHES_SUCCESS:
      return {
        ...state,
        dishesList: action.payload,
        isFetchingDishes: false
      };
    case Types.FETCH_DISHES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingDishes: true
      };
    default:
      return state;
  }
};

export default dishesReducer;