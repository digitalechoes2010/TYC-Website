import apiClient from "../config/clients";
import { PathApi } from "../config/api.path.config";

import localStorage from "redux-persist/es/storage";
import { API } from "../config/api.config";

export function userUpdateService(request: any) {
  return apiClient
    .patch(PathApi.update, request)
    .then((data: any) => data)
    .catch((error: any) => {
      return error.response;
    });
}

export function userDirectToggleService(request: any) {
  return apiClient
    .post(PathApi.toggle, request)
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      return error.response;
    });
}
export function updateProfileService(type: string, request: Partial<any>) {
  const postData =
    type == "BUSINESS"
      ? {
          businessProfiles: request,
        }
      : {
          socialProfiles: request,
        };

  return apiClient
    .patch(PathApi.profileUpdate + type, postData)
    .then((data: any) => data)
    .catch((error: any) => {
      return error.response;
    });
}
export function updateProfileItemService(type: string, request: Partial<any>) {
  return apiClient
    .patch(PathApi.profileItemUpdate + type, {
      request,
    })
    .then((data: any) => data)
    .catch((error: any) => {
      return error.response;
    });
}
export function deleteProfileItemService(type: string, id: string) {
  console.log(PathApi.profileItemDelete + `${type}` + `/${id}`);
  return apiClient
    .delete(PathApi.profileItemDelete + `${type}` + `/${id}`)
    .then((data: any) => data)
    .catch((error: any) => {
      return error.response;
    });
}
export function updateBusinessCard(request: Partial<any>) {
  return apiClient
    .patch(PathApi.businessCard, request)
    .then((data: any) => data)
    .catch((error: any) => {
      return error.response;
    });
}
export function getUserById(id: string) {
  return apiClient
    .get(PathApi.usersByid + `/${id}`)
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      return {
        error,
      };
    });
}
