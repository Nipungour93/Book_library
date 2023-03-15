/**
 * App bootstrap slice
 * @format
 */

import { createSlice } from '@reduxjs/toolkit';

interface State {
  ready: boolean;
}

const initialState: State = {
  ready: false,
};

const appBootstrapSlice = createSlice({
  name: 'appBootstrap',
  initialState,
  reducers: {
    bootstrapApp(state) {},
    markAppAsReady(state) {
      state.ready = true;
    },
  },
});

// Reducer )-------------------------------------
export const appBootstrapReducer = appBootstrapSlice.reducer;

// Actions )-------------------------------------
export const { bootstrapApp, markAppAsReady } = appBootstrapSlice.actions;
