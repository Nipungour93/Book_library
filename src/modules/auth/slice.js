/**
 * Auth slice
 * @format
 */

import {createAction} from '@reduxjs/toolkit';

export const signup = createAction('AUTH/SIGNUP');
export const signin = createAction('AUTH/SIGNIN');
export const forgot = createAction('AUTH/FORGOT');
export const logout = createAction('AUTH/LOGOUT');
