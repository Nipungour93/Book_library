/**
 * Auth sagas
 * @format
 */

import {takeLatest, call, put} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {signin, signup, forgot, logout} from './slice';
import {Routes, RoutesSection} from '@app/constants/routes';
import {
  setUser,
  changeAppSection,
  createLoader,
  logoutApp,
} from '../common/index';

/**
 * signin with email, password
 * @param email
 * @param password
 */

function* signinSaga({payload}) {
  const loader = createLoader();
  const {email, password} = payload;
  try {
    yield put(loader.present());
    const {
      user: {_user},
    } = yield auth().signInWithEmailAndPassword(email, password);

    yield put(setUser(_user));
    yield put(changeAppSection(RoutesSection.MainSection));
  } catch ({code, error}) {
    let message = '';
    if (code === 'auth/user-not-found') {
      message = 'User does not exist';
    } else if (code === 'auth/invalid-email') {
      message = 'User invalid';
    } else if (code === 'auth/wrong-password') {
      if (email.indexOf('@gmail.com') !== -1) {
        message = 'Password is incorrect or you should try sign in with Google';
      } else {
        message = 'Password is incorrect';
      }
    } else if (code.includes('network-request-failed')) {
      message = 'Check your network connection';
    } else {
      message = 'Something went wrong.';
    }
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

/**
 * signup with email, password
 * @param username
 * @param email
 * @param password
 */
function* signupSaga({payload}) {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const {email, userName, password} = payload;
    console.log({payload});
    const {
      user: {_user},
    } = yield auth().createUserWithEmailAndPassword(email, password);
    console.log({_user});

    if (_user?.uid) {
      console.log('01 =======>');
      yield firestore()
        .collection('users')
        .doc(_user.uid)
        .set({
          userName,
          email: email.toLowerCase(),
          createdAt: firestore.FieldValue.serverTimestamp(),
          modifiedAt: firestore.FieldValue.serverTimestamp(),
          userId: _user.uid,
        })
        .catch(e => console.log(e));

      // yield put(setUser(_user));
      yield showMessage({
        message: 'Registered sucessfully',
        type: 'success',
      });
      yield put(changeAppSection(RoutesSection.MainSection));
    }
  } catch (error) {
    console.log(error, 'register_error');
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

/**
 * forgot password
 * @param email
 */
function* forgotSaga({payload}) {
  const loader = createLoader();
  const {email} = payload;
  try {
    yield put(loader.present());
    const data = yield auth().sendPasswordResetEmail(email);
    yield showMessage({
      message: `We have sent a email for password reset to ${email}`,
      type: 'success',
    });
    yield put(changeAppSection(RoutesSection.AuthSection));
  } catch ({code, message, error}) {
    if (code == 'auth/user-not-found') {
      yield showMessage({
        message: `There is no user record corresponding to this email ${email}`,
        type: 'danger',
      });
    }
  } finally {
    yield put(loader.dismiss());
  }
}

/**
 * logout from app
 */

function* logoutSaga() {
  const loader = createLoader();
  try {
    yield put(loader.present());
    yield auth().signOut();
    yield put(logoutApp());
    yield AsyncStorage.clear();
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* authSagas() {
  yield takeLatest(signin, signinSaga);
  yield takeLatest(signup, signupSaga);
  yield takeLatest(forgot, forgotSaga);
  yield takeLatest(logout, logoutSaga);
}

export {authSagas};
