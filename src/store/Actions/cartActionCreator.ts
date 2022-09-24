import { request } from "http";
import { successToast } from "../../utils/toasthelper";
import * as cartActionTypes from "../ActionTypes/cartActionTypes";

export function addItem(payload: any) {
  const action: any = {
    type: cartActionTypes.ADD_ITEM,
    payload,
  };

  return action;
}

export function removeItem(payload: string) {
  const action: any = {
    type: cartActionTypes.REMOVE_ITEM,
    payload,
  };
  return action;
}

export function editItem(payload: any) {
  const action: any = {
    type: cartActionTypes.EDIT_ITEM,
    payload,
  };
  return action;
}
export function cleanCart() {
  const action: any = {
    type: cartActionTypes.CLEAN_CART,
  };
  return action;
}
