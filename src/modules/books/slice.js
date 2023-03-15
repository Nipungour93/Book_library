/**
 * book slice
 * @format
 */

import {createSlice, createAction} from '@reduxjs/toolkit';

const initialState = {
  book: [],
  bookBookmark: [],
  chapter: [],
  category: [],
  review: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBook(state, action) {
      state.book = action.payload;
    },
    setBookBookmark(state, action) {
      state.bookBookmark = action.payload;
    },
    setChapter(state, action) {
      state.chapter = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setReview(state, action) {
      state.review = action.payload;
    },
  },
});

// Reducer )--------------------------------------
export const bookReducer = bookSlice.reducer;

// Actions )-------------------------------------
export const {setBook, setBookBookmark, setCategory, setChapter,setReview} =
  bookSlice.actions;

export const getBookList = createAction('GET_BOOK');
export const getChapterList = createAction('GET_CHAPTER');
export const getCategoryList = createAction('GET_CATEGORY');
export const getReviewList = createAction('GET_REVIEW');
export const ratings = createAction('RATINGS');
