import {
  IS_ERROR,
  IS_LOADED,
  IS_LOADING,
  LOGOUT,
} from "../constants/constant.js";
const initialState = {
  isLoading: false,
  data: [],
  error: "",
  isLoggedIn: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, data: [], isLoading: false };
    case IS_LOADED:
      return {
        ...state,
        data: action.payload.data,
        error: "",
        isLoading: true,
      };
    case IS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case LOGOUT:
      return {
        ...state,
        data: [],
        isLoading: false,
        error: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
