import { call, put, takeEvery } from "redux-saga/effects";
import {
  LoginUser,
  MobileLogin,
  SocialLogin,
} from "../../../services/loginService";
import { errorToast, successToast } from "../../../utils/toasthelper";
import * as LoginActions from "../../Actions/loginActionCreator";
import * as types from "../../ActionTypes/loginActionTypes";
import { resetUserReducer } from "../../Actions/userActionCreator";
// import { setUserdata } from "../Actions/UserActions";
export function* loginAsync(action: any) {
  yield put(LoginActions.enableLoader());
  try {
    let response;
    if (action.request.accountType == "mobile") {
      response = yield call(MobileLogin, action.request);
      // console.log("type response", response);
    } else if (
      action.request.accountType == "google" ||
      action.request.accountType == "facebook"
    ) {
      response = yield call(SocialLogin, action.request);
      console.log("SocialLogin response", response);
    } else {
      console.log("login", action.request);
      response = yield call(LoginUser, action.request);
    }
    if (response.status === 200) {
      const { data } = response;
      // console.log(data);
      const { accessToken, refreshToken } = data;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      yield put(LoginActions.onLoginResponse(data));
      yield put(LoginActions.disableLoader());
      successToast("Logged In Successfully");
      // yield delay(500);
      console.log(response);
      window.location.href = "/Welcome";
    } else {
      throw response.data.error;
    }
  } catch (err) {
    console.log(err);
    errorToast("Failed to Log In");
    yield put(LoginActions.loginFailed({ errors: err }));
    yield put(LoginActions.disableLoader());
  }
}

export function* logout() {
  localStorage.setItem("token", "");
  localStorage.setItem("refreshToken", "");
  yield put(LoginActions.disableLoader());
  yield put(resetUserReducer());
}
export function* watchLoginSaga() {
  yield takeEvery(types.LOGIN_REQUEST, loginAsync);
  yield takeEvery(types.LOG_OUT, logout);
}
