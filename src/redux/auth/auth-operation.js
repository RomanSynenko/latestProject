import axios from 'axios';
import authAction from './auth-action';

import Pnotify from '../../Components/Pnotify/Pnotify';
import { useSelector } from 'react-redux';
import authSelector from './auth-selector';

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
  getCurrentUserError,
} = authAction;

axios.defaults.baseURL = 'http://tests-app-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const respons = await axios.post('/api/users/signup', credentials);
    token.set(respons.data.token);
    Pnotify.goodRequest();
    dispatch();
  } catch (error) {
    // Pnotify.error();
    // dispatch(registerError(error.message));
  }
};

const registerGoogle = () => async dispatch => {
  dispatch(registerRequest());
  try {
    const respons = await axios.get('/api/users/google');
    token.set(respons.data.data.token);
  } catch (error) {
    Pnotify.error();
    dispatch(registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const respons = await axios.post('/api/users/signin', credentials);
    token.set(respons.data.data.token);
    dispatch(loginSuccess(respons.data.data));
    Pnotify.goodRequest();
  } catch (error) {
    Pnotify.error();
    dispatch(loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/api/users/signout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    Pnotify.error();
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {

  const {
    auth: { token: persistedToken }
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.post('/api/users/current');
    dispatch(getCurrentUserSuccess(response.data.data.user));
  } catch (error) {
    Pnotify.error();
    dispatch(getCurrentUserError(error.message));
  }

};

export default { register, logIn, logOut, getCurrentUser, registerGoogle };
