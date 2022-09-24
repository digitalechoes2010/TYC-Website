import * as types from "../ActionTypes/userActionTypes";

const initialState: any = {};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_BUSINESSCARD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_USER_PP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.USER_PROFILE_IMAGE_UPDATE:
      return {
        ...state,
        isLoading: true,
        ...action.response,
      };
    case types.USER_DETAIL_RESPONSE:
      return {
        ...state,
        isLoading: true,
        ...action.response,
      };
    case types.UPDATE_USER_RESPONSE:
      return {
        ...state,
        isLoading: true,
        ...action.response,
      };
    case types.UPDATE_BUSINESSCARD_RESPONSE:
      return {
        ...state,
        isLoading: true,
        ...action.response,
      };

    case types.USER_DIRECT_TOGGLE_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_USER_P_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_USER_P_ITEM_RESPONSE:
      return {
        ...state,
        isLoading: false,
        [action.profileType]: [
          ...state[action.profileType].map((i) =>
            i.id === action.response.id ? action.response : i
          ),
        ],
      };
    case types.USER_DIRECT_TOGGLE:
      return {
        ...state,
        isLoading: false,
        isDirect: action.response.status,
        activeDirect: action.response.activeDirect,
      };
    case types.USER_ERROR_RESPONSE:
      return {
        ...state,
        isLoading: false,
        errors: action.response.errors,
      };
    case types.USER_P_ITEM_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.USER_P_ITEM_DELETE_RESPONSE:
      return {
        ...state,
        isLoading: false,
        [action.profileType]: [
          ...state[action.profileType].filter((i: any) => i.id !== action.id),
        ],
      };
    case types.USER_PROFILE_TAB_CHANGE:
      return {
        ...state,
        isLoading: false,
        profileTabType: action.response,
      };
    case types.USER_FIRST_OPEN:
      return {
        ...state,
        isFirstLogin: false,
      };
    case types.RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
};

export default UserReducer;
