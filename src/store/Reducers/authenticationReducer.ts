import * as types from "../ActionTypes/authenticationActionTypes";

const initialState: any = {
  isLoggedIn: false,
  token: null,
  refreshToken: undefined,
};

export const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATED:
      console.log(action);
      return {
        ...state,
        token: action.data.token,
        refreshToken: action.data?.refreshToken,
        isLoggedIn: true,
      };

    case types.UNAUTHENTICATED:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
      };
    case types.RESET_STORE:
      return initialState;
  }
};
