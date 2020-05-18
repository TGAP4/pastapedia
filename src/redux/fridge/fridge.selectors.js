import {createSelector} from 'reselect';

const selectFridge = state => state.fridge;

export const selectFridgeItems = createSelector(
  [selectFridge],
  fridge => fridge.fridgeItems
);