/**
 * App bootstrap sagas
 * @format
 */

 import {put, select, takeLatest, call, delay} from 'redux-saga/effects';
 import SplashScreen from 'react-native-splash-screen';
 
 import {RoutesSection} from '../constants';
 import { createLoader} from '../../modules/common';
 import {bootstrapApp, markAppAsReady} from './slice';
 
 function* bootstrapAppSaga() {
   const loader = createLoader();
   try {
     yield put(loader.present());
     yield put(markAppAsReady());
     yield delay(300);
     yield call(SplashScreen.hide);
   } catch (err) {
   } finally {
     yield put(loader.dismiss());
   }
 }
 
 function* appBootstrapSagas() {
   yield takeLatest(bootstrapApp, bootstrapAppSaga);
 }
 
 export {appBootstrapSagas};
 