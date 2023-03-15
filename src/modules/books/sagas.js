/**
 * User sagas
 * @format
 */

import {takeLatest, select, put, call} from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

// Screen
// import {httpRequest} from '@app/service';
import {
  getBookList,
  setBook,
  getCategoryList,
  getChapterList,
  getReviewList,
  setCategory,
  setChapter,
  setReview,
  ratings,
} from './slice';
import {createLoader} from '@app/modules/common';
import {
  selectBookList,
  selectCategoryList,
  selectChapterList,
} from './selectors';

function* BookListSaga() {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const book = yield select(selectBookList);
    const {_docs} = yield firestore().collection('books').get();
    const books = _docs?.map(({_data, id}) => {
      return {..._data, bookId: id};
    });
    yield put(setBook(books));
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* ChapterListSaga({payload: bookID}) {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const chapter = yield select(selectChapterList);
    const {_docs} = yield firestore().collection('chapters').get();
    const chapters = _docs?.map(({_data}) => _data);
    yield put(setChapter(chapters));
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* CategoryListSaga() {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const {_docs} = yield firestore().collection('category').get();
    const categorys = _docs?.map(({_data}) => _data);
    console.log({categorys});
    yield put(setCategory(categorys));
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* ReviewListSaga() {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const {_docs} = yield firestore().collection('review').get();
    const review = _docs?.map(({_data, id}) => {
      return {..._data, id};
    });
    console.log({review});
    yield put(setReview(review));
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}


/**
 * update user rating
 * @param {*} rating
 */
function* ratingsSaga({payload}) {
  const loader = createLoader();

  try {
    yield put(loader.present());
    const {bookId, review,rating} = payload;
    const {uid} = yield auth().currentUser;
    if (uid) {
      yield firestore().collection('review').add({
        review,
        bookId,
        userId: uid,
        rating,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      yield showMessage({
        message: 'rating has been updated',
        type: 'success',
      });
      yield put(getReviewList());
      //yield call(goBack);
    }
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* bookSaga() {
  yield takeLatest(getBookList, BookListSaga);
  yield takeLatest(getChapterList, ChapterListSaga);
  yield takeLatest(getCategoryList, CategoryListSaga);
  yield takeLatest(getReviewList, ReviewListSaga);
  yield takeLatest(ratings, ratingsSaga);
}

export {bookSaga};
