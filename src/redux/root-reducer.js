import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import fridgeReducer from './fridge/fridge.reducer';
import dishesReducer from './dishes/dishes.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['fridge']
};

const rootReducer = combineReducers({
  fridge: fridgeReducer,
  dishes: dishesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;