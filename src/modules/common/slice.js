/**
 * Common slice
 * @format
 */

import {createSlice, createAction} from '@reduxjs/toolkit';

import {RoutesSection} from '../../constants';

const initialState = {
  activeSection: RoutesSection.AuthSection,
  loader: false,
  authToken: null,
  user: null,
  theme: null,
  bookmarks: [],
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeAppSection(state, action) {
      state.activeSection = action.payload;
    },
    presentLoader(state, action) {
      state.loader = true;
    },
    dismissLoader(state, action) {
      state.loader = false;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setBookmark(state, action) {
      const isExist = state.bookmarks.includes(action.payload);
      state.bookmarks = isExist
        ? state.bookmarks.filter(e => e != action.payload)
        : [...state.bookmarks, action.payload];
    },
  },
  extraReducers: builder => {
    builder.addCase(logoutApp, () => {
      return initialState;
    });
  },
});

// Reducer )--------------------------------------
export const commonReducer = commonSlice.reducer;

// Actions )-------------------------------------
export const {
  changeAppSection,
  presentLoader,
  dismissLoader,
  setAuthToken,
  setUser,
  setTheme,
  setBookmark
} = commonSlice.actions;


// Create loader
export const createLoader = () => {
  return {
    present: () => presentLoader(),
    dismiss: () => dismissLoader(),
  };
};

export const logoutApp = createAction('auth/logout');