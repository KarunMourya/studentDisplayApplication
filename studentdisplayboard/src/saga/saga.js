import { put, takeLatest, call } from "redux-saga/effects";
import {
  IS_LOADING,
  ADD_USER_REQUEST,
  LOGIN_LOADING,
} from "../redux/constants/constant";
import {
  clearMessage,
  fetchData,
  loadingError,
} from "../redux/actions/fetchDataAction";
import { fetchData as fetchPostData } from "../services/ApiCalling/fetchDataApiCall";
import { fetchToken as fetchTokenCall } from "../services/ApiCalling/loginApiCall";
import { signUpUser } from "../services/ApiCalling/SignUpApiCAll";
import { addUserFailure, addUserSuccess } from "../redux/actions/addUserAction";
import { loginFailure, loginSuccess } from "../redux/actions/loginUserAction";

function* getPostData() {
  try {
    yield put(clearMessage())
    const response = yield call(fetchPostData);
    if (response.data) {
      yield put(fetchData(response.data));
    } else yield put(loadingError("not able to fetch data"));
  } catch (error) {
    yield put(loadingError("INTERNAL SERVER ERROR"));
  }
}

function* postUserData(action) {
  try {
    const response = yield call(fetchTokenCall, action.payload);
    if (response.data.token) {
      yield put(loginSuccess(response.data));
    }
  } catch (error) {
    yield put(loginFailure(error.response.data));
  }
}

function* addUserData(action) {
  try {
   const response =  yield call(signUpUser, action.payload);
    yield put(addUserSuccess(response.data));
  } catch (error) {
    yield put(addUserFailure(error.response.data));
  }
}

export function* userCallWatcher() {
  yield takeLatest(ADD_USER_REQUEST, addUserData);
  yield takeLatest(IS_LOADING, getPostData);
  yield takeLatest(LOGIN_LOADING, postUserData);
}
