import {all, call} from 'redux-saga/effects';
import dishesSagas from './dishes/dishes.sagas';

export default function* rootSaga() {
  yield all([
    call(dishesSagas)
  ]);
};