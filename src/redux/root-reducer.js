import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import fridgeReducer from './fridge/fridge.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  fridge: fridgeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;