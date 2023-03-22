import { CLEAR_MESSAGE, LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "../constants/constant";

export const loadingToken = (payload) => {
  return {
    type: LOGIN_LOADING,
    payload: payload,
  };
};

export const loginSuccess = (message) => {
  return {
    type: LOGIN_SUCCESS,
    payload: message,
  };
};

export const loginFailure = (message) => {
  return {
    type: LOGIN_FAILURE,
    payload: message,
  };
};

export const clearMessage = () => {
  return { type: CLEAR_MESSAGE };
};