import { call, put, takeLatest } from "redux-saga/effects";
import {
  getUserById,
  deleteProfileItemService,
  updateProfileItemService,
  updateProfileService,
  userDirectToggleService,
  userUpdateService,
  updateBusinessCard,
} from "../../../services/userService";

import {
  deleteUserProfileItemResponse,
  setUserdata,
  updateUserProfileItemResponse,
  userDirectToggle,
  userErrorResponse,
  userUpdateBusinessCardResponse,
} from "../../Actions/userActionCreator";
import * as types from "../../ActionTypes/userActionTypes";

export function* updateUser(action: any) {
  console.log(action);
  try {
    const response = yield call(userUpdateService, action.request);
    console.log(response);

    if (response.status === 200) {
      const { data } = response;
      console.log("success", data);
      console.log("res", response);
      yield put(setUserdata(data));
    } else {
      throw response.data.error;
    }
  } catch (err) {
    yield put(userErrorResponse({ errors: err }));
  }
}

export function* toggleDirect(action: any) {
  try {
    const response = yield call(userDirectToggleService, action.request);
    if (response.status === 200) {
      const { data } = response;

      yield put(userDirectToggle(data));
    } else {
      throw response.data.error;
    }
  } catch (err) {
    yield put(userErrorResponse({ errors: err }));
  }
}
export function* requestProfileUpdate(action: any) {
  try {
    const response = yield call(
      updateProfileService,
      action.profileType,
      action.request
    );
    if (response.status === 200) {
      const { data } = response;
      console.log("res", response);
      yield put(setUserdata(data));
    } else {
      throw response.data.error;
    }
  } catch (err) {
    yield put(userErrorResponse({ errors: err }));
  }
}

export function* requestBusinessCardUpdate(action: any) {
  try {
    const response = yield call(updateBusinessCard, action.request);
    if (response.status === 200) {
      const { data } = response;
      console.log("res", response);
      yield put(userUpdateBusinessCardResponse(data));
    } else {
      throw response.data.error;
    }
  } catch (err) {
    yield put(userErrorResponse({ errors: err }));
  }
}
export function* requestProfileItemUpdate(action: any) {
  try {
    const response = yield call(
      updateProfileItemService,
      action.profileType,
      action.request
    );
    console.log("res", response);
    const { data } = response;
    yield put(updateUserProfileItemResponse(action.profileType, data));
  } catch (err) {
    yield put(userErrorResponse({ errors: err }));
  }
}
export function* deleteProfileItem(action: any) {
  try {
    const response = yield call(
      deleteProfileItemService,
      action.profileType,
      action.id
    );

    if (response.status === 204) {
      yield put(deleteUserProfileItemResponse(action.profileType, action.id));
    } else {
      throw new Error("Something Bad Happened");
    }
  } catch (err) {
    yield put(userErrorResponse({ errors: err }));
  }
}

export function* profileTabChange() {
  try {
    // const response = yield call(
    //   updateProfileItemService,
    //   action.profileType,
    //   action.request,
    // );
    // const {data} = response;
    // yield put(updateUserProfileItemResponse(action.profileType, data));
  } catch (err) {
    yield put(userErrorResponse({ errors: err }));
  }
}
export function* fetchUser(action: any) {
  try {
    const response = yield call(getUserById, action.request);
    if (response.status === 200) {
      const { data } = response;
      console.log("User data", data);
      yield put(setUserdata(data));
    } else {
      throw new Error("Could not connect to API");
    }
  } catch (err) {
    console.log(err);
  }
}
export function* watchUserDataAsync() {
  yield takeLatest(types.UPDATE_USER_REQUEST, updateUser);
  yield takeLatest(types.USER_DIRECT_TOGGLE_START, toggleDirect);
  yield takeLatest(types.UPDATE_USER_PP_REQUEST, requestProfileUpdate);
  yield takeLatest(types.USER_P_ITEM_DELETE_REQUEST, deleteProfileItem);
  yield takeLatest(types.UPDATE_USER_P_ITEM_REQUEST, requestProfileItemUpdate);
  yield takeLatest(
    types.UPDATE_BUSINESSCARD_REQUEST,
    requestBusinessCardUpdate
  );

  yield takeLatest(types.USER_DETAIL_REQUEST, fetchUser);
  // yield takeLatest(types.USER_PROFILE_TAB_CHANGE, profileTabChange);
}
