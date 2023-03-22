import { ADD_USER_SUCCESS,ADD_USER_FAILURE,ADD_USER_REQUEST,CLEAR_MESSAGE } from "../constants/constant";

export const addUserRequest = (data) => {
  return {
    type: ADD_USER_REQUEST,
    payload:data
  };
};

export const addUserSuccess = (message) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: message,
  };
};

export const addUserFailure = (error) => {
  return {
    type: ADD_USER_FAILURE,
    payload: error,
  };
};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
  };
};