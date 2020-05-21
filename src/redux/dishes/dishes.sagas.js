import {takeLatest, all, call, put} from 'redux-saga/effects';
import Types from './dishes.types';

import {firestore} from '../../firebase/firebase.utils';
import {fetchDishesSuccess, fetchDishesFailure} from './dishes.actions';


function* fetchDishesAsync() {
  try{
    const dishesRef = yield call([firestore, 'collection'], 'pasta-dishes');
    const snapshot = yield call([dishesRef, 'get']);
    const dishesList = yield call([snapshot.docs, 'map'], doc => doc.data());
    yield put(fetchDishesSuccess(dishesList));
  } catch (error) {
    yield put(fetchDishesFailure(error));
  }
};

function* fetchDishesStart() {
  yield takeLatest(Types.FETCH_DISHES_START, fetchDishesAsync);
};

export default function* dishesSagas() {
  yield all([
    call(fetchDishesStart)
  ]);
};