import {
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  CLEAR_MESSAGE,
} from "../constants/constant";

const initialState = {
  message: "",
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_SUCCESS:
      return {
        ...state,message:action.payload.message,loading:false,error:false
      }
      case ADD_USER_FAILURE:
        return {
          ...state,message:action.payload.message,loading:false,error:action.payload.error
        }
    case CLEAR_MESSAGE:
      return {
      ...state,message:"",loading:false,error:""
    }
    default: return state
  }
}

export default userReducer;
