import * as types from "../ActionTypes/loginActionTypes";

const initialState: any = {
  isLoggedIn: false,
  email: "",
  mobile: null,
  password: null,
  errors: {},
  token: null,
  refreshToken: undefined,
  userData: null,
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        email: action.request.email,
        mobile: action.request.mobile,
        password: action.request.password,
        errors: {},
      };
    case types.LOGIN_ENABLE_LOADER:
      return { ...state, isLoading: true };
    case types.LOGIN_DISABLE_LOADER:
      return { ...state, isLoading: false };
    case types.LOGIN_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        errors: {},
        userData: action.response,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        errors: action.response.errors,
        isLoading: false,
      };
    case types.LOG_OUT:
      return Object.assign({}, initialState);
    case types.RESET_STORE:
      return initialState;
    default:
      return state;
  }
};

export default LoginReducer;
