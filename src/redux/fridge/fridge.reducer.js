import Types from './fridge.types';
import {addItem, deleteItem} from './fridge.utils';

const INITIAL_STATE = {
  fridgeItems: []
};

const fridgeReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return {
        ...state,
        fridgeItems: addItem(state.fridgeItems, action.payload)
      };
    case Types.DELETE_ITEM:
      return {
        ...state,
        fridgeItems: deleteItem(state.fridgeItems, action.payload)
      }
    default:
      return state;
  }
};

export default fridgeReducer;