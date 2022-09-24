import { put, call, takeEvery } from "redux-saga/effects";
import * as types from "../../ActionTypes/userSignUpActionTypes";
import { setUserdata } from "../../Actions/userActionCreator";
import { SignupUser } from "../../../services/signUpService";
import {
  failureSignup,
  successSignup,
} from "../../Actions/userSignUpActionCreator";
import { authenticate } from "../../Actions/authenticationActionCreator";

export function* processSignupRequest(action: any) {
  console.log(action);
  try {
    const response = yield call(SignupUser, action.request);
    console.log("res", response);
    if (response.status === 200) {
      const { data } = response;
      const { accessToken, refreshToken } = data;
      delete data.accessToken;
      delete data.refreshToken;
      yield put(setUserdata(data));
      yield put(successSignup());
      yield put(
        authenticate({
          token: accessToken,
          refreshToken: refreshToken,
        })
      );
      window.location.href = "/SignIn";
    } else {
      throw response.data.error;
    }
  } catch (err) {
    yield put(failureSignup({ errors: err }));
  }
}
export function* watchUserSignupAsync() {
  yield takeEvery(types.REGISTER_REQUEST, processSignupRequest);
}
