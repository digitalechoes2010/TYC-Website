import axios, { AxiosRequestConfig } from "axios";
import { PathApi } from "./api.path.config";
import { store } from "../store/store";

const fetchClient = () => {
  const defaultOptions = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  // Create instance
  // @ts-ignore
  let instance = axios.create(defaultOptions);
  // Set the AUTH token for any request

  instance.interceptors.request.use(function (config) {
    const token = store.getState().LoginReducer.userData.accessToken;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    console.log(config);
    return config;
  });

  return instance;
};

export const apiClient = {
  get(path: string) {
    return fetchClient().get(`${PathApi.BASE_URL}${path}`);
  },
  post(path: string, params: any, contentType?: AxiosRequestConfig) {
    return fetchClient().post(`${PathApi.BASE_URL}${path}`, params);
  },
  patch(path: string, params: any, contentType?: string) {
    return fetchClient().patch(`${PathApi.BASE_URL}${path}`, params);
  },
  delete(path: string) {
    return fetchClient().delete(`${PathApi.BASE_URL}${path}`);
  },
  upload(path: string, params: any) {
    return fetchClient().post(`${PathApi.BASE_URL}${path}`, params, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
export default apiClient;
