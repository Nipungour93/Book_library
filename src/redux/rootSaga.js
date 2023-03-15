/**
 * Root saga
 * @format
 */
import {spawn} from 'redux-saga/effects';

// Screens 
import {commonSagas} from '@app/modules/common';
import {appBootstrapSagas} from '@app/modules/app-bootstrap';
import {authSagas} from '@app/modules/auth';
import {bookSaga} from '@app/modules/books';

export function* rootSaga() {
  yield spawn(appBootstrapSagas);
  yield spawn(commonSagas);
  yield spawn(authSagas);
  yield spawn(bookSaga);
}
