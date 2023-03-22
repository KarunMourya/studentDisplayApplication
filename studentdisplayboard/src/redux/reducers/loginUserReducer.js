import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_MESSAGE,
  LOGOUT
} from "../constants/constant";

const initialLoginState = {
  token: "",
  loading: false,
  error: false,
  message: "",
};

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        error: false,
        message: action.payload.message,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };
      case LOGOUT:
        return {
          ...state,
          token: "",
          loading: false,
          error: "",
        };
    case CLEAR_MESSAGE:
      return { ...state, message: "" };
    default:
      return state;
  }
};

export default loginReducer;
