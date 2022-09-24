import * as types from "../ActionTypes/userSignUpActionTypes";

export function requestSignup(request: any) {
  return {
    type: types.REGISTER_REQUEST,
    request,
  };
}

export function successSignup() {
  return {
    type: types.REGISTER_SUCCESS,
  };
}

export function failureSignup(response: any) {
  return {
    type: types.REGISTER_FAILURE,
    response,
  };
}

export function clearSignupStore() {
  return {
    type: types.REGISTER_STORE_CLEAR,
  };
}
