import Types from './fridge.types';

export const addItem = item => ({
  type: Types.ADD_ITEM,
  payload: item
});

export const deleteItem = item => ({
  type: Types.DELETE_ITEM,
  payload: item
});