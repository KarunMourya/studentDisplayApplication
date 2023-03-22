import {
  IS_ERROR,
  IS_LOADED,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  IS_LOADING,
  LOGOUT,
} from "../constants/constant.js";

export const fetchData = (payload) => {
  return {
    type: IS_LOADED,
    payload: payload,
  };
};

export const loadingData = () => {
  return {
    type: IS_LOADING,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const loadingError = (payload) => {
  return {
    type: IS_ERROR,
    payload: payload,
  };
};

export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
  };
};
