import * as types from "../ActionTypes/authenticationActionTypes";

export function authenticate(data: any["data"]) {
  return {
    type: types.AUTHENTICATED,
    data,
  };
}

export function unAuthenticate() {
  return {
    type: types.UNAUTHENTICATED,
  };
}
export function unVerified(response: any["data"]) {
  return {
    type: types.UNVERIFIED,
    response,
  };
}
export function resetStores() {
  return {
    type: types.RESET_STORE,
  };
}
