import * as types from "../ActionTypes/userSignUpActionTypes";

import { FileUploadConstant } from "../ActionTypes/fileManager.types.d";

const initialState: any = {
  email: "",
  mobile: "",
  password: "",
  countryCode: "US",
  callingCode: "+1",
  isLoading: false,
  isSuccess: false,
  errors: {},
};

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return {
        ...state,
        email: action.request.email,
        mobile: action.request.mobile,
        password: action.request.password,
        countryCode: action.request.countryCode,
        callingCode: action.request.callingCode,
        isLoading: true,
        errors: {},
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case types.REGISTER_FAILURE:
      console.log(action);
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        errors: action.response.errors,
      };
    case types.REGISTER_STORE_CLEAR:
      return Object.assign({}, initialState);
    case FileUploadConstant.RESET_STORE:
      return initialState;
    default:
      return state;
  }
};
