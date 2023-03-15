/**
 * book selectors
 * @format
 */

const bookReducer = state => state.bookReducer;

export const selectBookList = state => bookReducer(state).book;
export const selectBookBookmark = state => bookReducer(state).bookBookmark;
export const selectChapterList = state => bookReducer(state).chapter;
export const selectCategoryList = state => bookReducer(state).category;
export const selectReviewList = state => bookReducer(state).review;

