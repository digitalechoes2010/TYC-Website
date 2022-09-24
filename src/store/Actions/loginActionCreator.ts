import * as types from "../ActionTypes/loginActionTypes";

export function requestLogin(request: any) {
  return {
    type: types.LOGIN_REQUEST,
    request,
  };
}

export function loginFailed(response: any) {
  return {
    type: types.LOGIN_FAILED,
    response,
  };
}
export function onLoginResponse(response: any) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logout() {
  return {
    type: types.LOG_OUT,
  };
}
