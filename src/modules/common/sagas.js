/**
 * Common sagas
 * @format
 */

import {takeLatest} from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {createLoader} from './slice';

function* setUserSaga({}) {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const {
      _user: {uid},
    } = yield auth().currentUser;
    const {_data} = yield firestore().collection('Users').doc(uid).get();
    console.log({..._data});
    yield put(setUser({..._data}));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(loader.dismiss());
  }
}
function* commonSagas() {}

export {commonSagas};
