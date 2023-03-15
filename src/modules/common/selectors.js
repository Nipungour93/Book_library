/**
 * Common selectors
 * @format
 */

const commonReducer = state => state.commonReducer;

export const selectActiveSection = state => commonReducer(state).activeSection;

export const selectUser = state => commonReducer(state).user;

export const selectLoader = state => commonReducer(state).loader;

export const selectBookmarks = state => commonReducer(state).bookmarks;
