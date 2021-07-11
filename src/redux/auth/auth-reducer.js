import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authAction from './auth-action';

const initialUserState = { name: null, email: null };
const {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError } = authAction;

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => initialUserState,
    [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload.token,
    [loginSuccess]: (_, { payload }) => payload.token,
    [logoutSuccess]: () => null,
});

const error = createReducer(null, {
    [registerError]: (_, { payload }) => payload,
    [loginError]: (_, { payload }) => payload,
    [logoutError]: (_, { payload }) => payload,
    [getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    [getCurrentUserSuccess]: () => true,
    [registerError]: () => false,
    [loginError]: () => false,
    [getCurrentUserError]: () => false,
    [logoutSuccess]: () => false,
});


export default combineReducers({
    user,
    isAuthenticated,
    token,
    error,
});
